(ns f4f
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
                      :afternoon
                      [{:heading "Artists for Refugees"
                        :subheading "Craft a pro-refugee piece"
                        :description "A chance for adults and kids alike to let their artistic side shine through. Get involved in bringing art and activism together, a pro-refugee creative workshop for young and old. Amplify your voice and the refugee rights message we're building for RRAN's involvement in the Fremantle Festival Parade."}
                       {:heading "Mythbusting circle"
                        :subheading "Breaking down false beliefs" 
                        :description "There are many false perceptions about asylum seekers and refugees in the Australian community. The mythbusting circle provides an opportunity for attendees of Freo4Freedom to sit with refugee advocates and refugees in a non-judgmental environment, asking questions about refugees to learn more about the issues they face in country of origin, their refugee journey and detention in Australia."}
                       {:heading "Tamil food corner"
                        :subheading "Tamil culture, food and flavours" 
                        :description 
                        "Promoting Tamil food, sharing interesting facts about Tamil culture, educate visitors on the ongoing struggle of minority Tamils in Sri Lanka and creating awareness about minority struggles around the world."}
                       {:heading "Media skills workshop" 
                        :subheading "Tricks of the trade from a professional"
                        :description "What makes a good story? Questions journalists ask; catching the media wave; interview skills; rules of the game. What not to do and how to use social media to amplify your message."}
                       {:heading "Australia's dark rift"
                        :subheading "Refugee policy and practice since 1992"
                        :description "An overview of the political motivations which have driven policy toward asylum seekers since the introduction of mandatory detention in 1992. We will also discuss how policy and laws have deliberately created a rift in Australian society and human rights practices. We will conclude by proposing ways in which this rift may be repaired and provide you with the tools and imagination to become agents for social and political change."}
                       {:heading "Lawn bowls" 
                        ;:subheading "Send one down for refugee rights" 
                        :description 
                        "Soak up the Freo festival atmosphere while you compete to relax on the bowling club greens in the friendliest of friendly competitions. Don't forget to bring a hat!"}
                       {:heading "Bar open • Food and drink" 
                        :description 
                        "Snacks, drinks and sweets to tickle your tastebuds from local vendors, and a full bar open inside the North Fremantle Bowling Club."}
                       {:heading "Hazara shisha corner" 
                        :description 
                        "Enjoy the flavour of authentic shisha for a gold coin donation."}
                       ;:image-uri "/img/koththu.jpg"}
                       ]
                      :evening
                      [{:heading "Rev. Chris Bedding"}
                       {:heading "Joe Pule"}
                       {:heading "Shyam & Murtaza"}
                       {:heading "Paul Gioia & Bill Lawrie"}
                       {:heading "Yara Neto"
                        #_{:description "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, nisl venenatis maximus varius, felis dolor tempus arcu, in lobortis ipsum nulla sit amet nibh. Etiam nulla ligula, gravida id tristique id, vehicula et eros. Donec et tristique nibh."
                        :image-uri "/img/yaraneto.jpg"}}]
                      :colours  
                      (into [] 
                            (shuffle [
                                      ["#f7941e" "#000"] ; dark orange
                                      ["#7dc476" "#000"] ; darkseagreen
                                      ["#8660a9" "#fff"] ; lightslategray (purple)
                                      ["#fff200" "#000"] ; yellow
                                      ["#00a54f" "#fff"] ; seagreen
                                      ["#8c6239" "#000"] ; sienna
                                      ["#003662" "#fff"] ; midnightblue
                                      ]))

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
      (html [:div.col-lg-6.artist
             [:div.row.artist-header 
              {:style {;:z-index "-1"
                       ;:background-image (str "url(" (:image-uri activity)")")
                       :background-color ((:colour activity) 0)
                       :color ((:colour activity) 1)}}
              [:h2.item-headline.pull-right (:heading activity)]
              [:br]
              (when (not (nil? (:subheading activity)))
                [:h4.item-headline.pull-right [:span (:subheading activity)]])
              #_(when (not (nil? (:image-uri activity)))
                [:img.pull-right.activity-thumbnail {:src (:image-uri activity)}])]
              (when (not (nil? (:description activity))) 
                [:div.artist-text.event-text [:p (:description activity)]]
                )]))))

#_(defn activity-view [activity owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.col-lg-6
             [:div.event 
              {:style {:background-color ((:colour activity) 0)
                       :color ((:colour activity) 1)}}
              [:h2 (:heading activity)]
              (when (not (nil? (:subheading activity)))
                [:h4 [:span (:subheading activity)]])
              (when (not (nil? (:image-uri activity)))
                [:img.pull-right.activity-thumbnail {:src (:image-uri activity)}])
              (when (not (nil? (:description activity))) [:p (:description activity)])]]))))

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
              [:h4 (:groupname pitch)]
              [:p (:description pitch)]
              #_[:p [:a.btn.btn-default {:href "#" :role "button"} "View details »"]]]]))))  

(defn afternoon-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.row.event
             [:div [:h2 "music • food • lawn bowls • workshops" [:span.hidden-md.hidden-sm.hidden-xs.pull-right "from 2PM"]]]
             (om/build-all activity-view (map #(assoc %1 :colour %2) 
                                              (:afternoon app)
                                              (cycle (:colours app))))]))))

(defn evening-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.row.event
             [:div [:h2 "hiphop freestyle • music • comedy show" [:span.hidden-md.hidden-sm.hidden-xs.pull-right "from 6:30PM"]]]
             (om/build-all activity-view (map #(assoc %1 :colour %2) 
                                              (:evening app)
                                              (cycle (:colours app))))]))))

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
      (html [:div.container
             [:div.site-wrapper-inner
              [:div.row
               [:div.event.cover
                [:h1 [:span.orange-text "#freo4freedom"]]
                [:p.lead "an event by " [:a {:href "https://www.facebook.com/RRANFremantle" :target "_blank"} 
                                         "Fremantle Refugee Rights Action Network"]
                 [:br]
                 "part of the " [:a {:href "https://www.facebook.com/fremantlefestival" :target "_blank"} 
                                 "Fremantle Festival"]]
                 [:h1.lead {:style {:font-size "200%"}}
                  "Sunday, November 2"
                  [:br]
                  "North Fremantle Bowling Club"
                  [:br]
                  "40 Stirling Highway, North Fremantle"
                  [:br]
                  [:b "ENTRY BY DONATION"]]
                 [:div {:style {:align "center"}}
                  [:dl.dl-horizontal
                   [:dt "2PM"]
                   [:dd "food, workshops, collaboration, lawn bowls, music"]
                   [:dt "6:30PM"]
                   [:dd "music, comedy performances and speakers"]]]
                 [:p [:h4.headline "Join us for an afternoon of social education and collaboration, leading into an evening of insightful comedy and inspiring music as we come together to build a creative local movement for social and political change."]]
                 [:p [:h4.headline "The #freo4freedom event is dedicated to promoting the cause of refugee rights in Australia. We're working towards the end of mandatory detention and offshore processing of asylum seekers."]]
                 [:div.row
                  [:div.col-lg-6
                   [:h2.red-text "#freo4freedom » afternoon"] 
                   [:h4 "Pro-refugee workshops, meetings and activities conducted in a positive, family friendly environment. See below for what's in store!"]]
                  [:div.col-lg-6
                   [:h2.red-text "#freo4freedom » evening"]
                   [:h4 "Performances from Fremantle and Perth musicians in support of refugee rights, along with pro-refugee speakers and stand-up comedy."]]]
                 [:div.row
                  [:div.col-lg-12 [:h4 [:span.orange-text "no crime to seek asylum"] [:span.pull-right "Email " [:a {:href "mailto:freo@rran.org"} "Freo RRAN " [:span.glyphicon.glyphicon-envelope]] " • Join " [:a {:href "https://www.facebook.com/events/944366122246547/"} "#freo4freedom on Facebook " [:img {:style {:height "20px" :vertical-align "baseline"} :src "/img/fblogo.png"}]]]]]]
                 ]]]]))))

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

             (om/root afternoon-view app-state
                      {:target (.getElementById js/document "afternoon")})

             (om/root evening-view app-state
                      {:target (.getElementById js/document "evening")})

             #_(om/root pitches-view app-state
                        {:target (.getElementById js/document "pitches")})


