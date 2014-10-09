(ns f4f.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [pani.cljs.core :as pani]
            [cljs.core.async :refer [<!]]
            [cljs-uuid.core :as uuid]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def firebase-app-url "https://torid-heat-2247.firebaseio.com")

(def app-state (atom {:pitching false
                      :activities
                      [{:heading "Mythbusting circle" 
                        :description "There are many false perceptions about asylum seekers and refugees in the Australian community. The Mythbusting Circle will be an opportunity for attendees of the event to sit with refugee advocates and refugees in a non-judgmental environment to ask questions about refugees to learn more about the issues they face in country of origin, their refugee journey and detention in Australia."
                        :image-uri "/img/drumming.jpg"}
                       {:heading "Tamil cuisine" 
                        :description "Come and try the mouthwatering tastes of Tamil cooking."
                        :image-uri "/img/koththu.jpg"}
                       ] 
                      :pitches
                      (into [] (map (fn [n] {:heading (str "Pitch #" n)
                                             :likes 0
                                             :email "tflynch@gmail.com"
                                             :groupname "Test Group"
                                             :uuid (str (uuid/make-random))
                                             :approved true 
                                             :description "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}) (range 6)))})) 

(defn init-firebase! []
  (println (uuid/make-random))
  (let [r (pani/root firebase-app-url)
        app @app-state]
    (pani/set! r :pitches (:pitches app))))

; DO NOT uncomment this once there's valid data in Firebase

#_(init-firebase!)

(defn activity-view [activity owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.col-lg-6
              [:h2 [:span.red-text (:heading activity)]]
              [:div.pull-right
              [:img.activity-thumbnail {:src (:image-uri activity)}]]
              [:p (:description activity)]]))))

(defn vote-button-id [unique-id]
  (str "vote-button-" unique-id))

(defn submit-vote [unique-id]
  (fn [] 
    (println "Voted for pitch " unique-id)
    (set! (.-className (.getElementById js/document (vote-button-id unique-id))) "btn btn-primary pull-right")))

(defn pitch-view [pitch owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.col-lg-6 
             [:div.inner
              [:h2 {:style {:display "inline"}} [:span.orange-text (:heading pitch)]]
              [:button.btn.btn-default.pull-right 
               (let [pitch-id (:uuid pitch)]
                 {:id (str "vote-button-" pitch-id)
                  :on-click (submit-vote pitch-id)})
               [:span.glyphicon.glyphicon-heart-empty]]
              [:h4 [:span.red-text (:groupname pitch)]]
              [:p (:description pitch)]
              #_[:p [:a.btn.btn-default {:href "#" :role "button"} "View details »"]]]]))))  

(defn activities-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.row.inner 
             [:h2 "#freo4freedom » On the day"]
             (om/build-all activity-view (:activities app))]))))

(defn pitches-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [r (pani/root firebase-app-url)
            c (pani/bind r :value :pitches)]
        (go-loop [m (<! c)]
                 (om/update! app :pitches (filter #(:approved %) m))
                 (recur (<! c)))))
    om/IRender
    (render [_]
      (apply dom/div nil (om/build-all pitch-view (:pitches app))))))

(defn event-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.site-wrapper-inner
             [:div.cover-container
              [:div.inner.cover
               [:h1 [:span.orange-text "#freo4freedom"]]
               [:h5 "a project of " [:a {:href "http://rran.org" :target "_blank"} 
                                     "Refugee Rights Action Network"]]
               [:p.lead "Sunday November 2, North Fremantle Bowling Club."]
               [:dl.dl-horizontal
                [:dt "2PM"]
                [:dd "food, workshops, collaboration, lawn bowls, music"]
                [:dt "6:30PM"]
                [:dd "music, comedy performances and speakers"]]
               [:p [:h4.headline "Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change."]]
               [:div.row
                [:div.col-lg-6
                 [:h2.red-text "What can I do?"]
                 [:p "The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We want " [:span.orange-text "you"] " to help us make a change."]]
                [:div.col-lg-6
                 [:h2.red-text "Like a project"]
                 [:p "Which of the project pitches for #freo4freedom do you think can make an impact?"]]]
               [:div.row
                [:div.col-lg-6
                 [:h2.red-text "What's your idea?"]
                 [:p "If you have an idea for an initiative, an event, a campaign or a creative work that you think can make a difference, click the red button below."]]
                [:div.col-lg-6
                 [:h2.red-text "Questions?"]
                 [:p "Any questions, contact us at " [:a {:href "mailto:freo@rran.org"} "freo@rran.org"] " today."]]]
               [:div.row
                [:div.col-lg-6
                 [:p "Funds raised by #freo4freedom will be used to help fund the project pitch with the most support. We're working towards the " [:span.orange-text "end of mandatory detention"] " and the " [:span.orange-text "end of offshore processing"] " of asylum seekers."]]
                [:div.col-lg-6
                 [:button.btn.btn-primary {:type "submit" :style {:float "bottom"} :on-click #(om/update! app :pitching true)} [:h3 "I've got an idea »"]]]]]]]))))

(defn get-value [id]
  (.-value (.getElementById js/document id)))

(defn submit-pitch [_ _ _ _]
  (let [r (pani/root firebase-app-url)
        p {:heading (get-value "pitch-heading")
           :description (get-value "pitch-description")
           :email (get-value "pitch-email")
           :groupname (get-value "pitch-groupname")
           :approved true
           :likes 0
           :uuid (str (uuid/make-random))}
        new-pitches (conj (:pitches @app-state) p)]
    (println new-pitches)
    (pani/set! r :pitches new-pitches)
    (swap! app-state assoc :pitching false)))

(defn pitch-form [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.site-wrapper-inner
             [:div.cover-container
              [:div.inner.cover
               [:h1 [:span.orange-text "#freo4freedom"]]
               [:form
                [:div.form-group
                 [:label {:for "pitch-heading"} [:h3.orange-text "Give your idea a name!"]]
                 [:input#pitch-heading.form-control {:type "text" :placeholder "My plan to support refugee rights"}]
                 [:label {:for "pitch-groupname"} [:h3.orange-text "Who are you?"]]
                 [:input#pitch-groupname.form-control {:type "text" :placeholder "My name or my group's name"}]
                 [:label {:for "pitch-email"} [:h3.orange-text "What's your email address?"]]
                 [:input#pitch-email.form-control {:type "text" :placeholder "Email (required — won't be published)"}]
                 [:label {:for "pitch-description"} [:h3.orange-text "Describe your project"]]
                 [:textarea#pitch-description.form-control {:rows 15 :type "text" :placeholder "Who, where, what, when and how?"}]]
                [:button.btn.btn-primary {:type "submit" :on-click submit-pitch} [:h3 "Tell us about it »"]]]]]]))))

(defn focus-view [app owner]
  (reify
    om/IRender
    (render [_]
      (if (:pitching app)
        (om/build pitch-form app)
        (om/build event-view app)))))

(om/root focus-view app-state
         {:target (.getElementById js/document "focus")})

(om/root activities-view app-state
         {:target (.getElementById js/document "activities")})

(om/root pitches-view app-state
         {:target (.getElementById js/document "pitches")})


