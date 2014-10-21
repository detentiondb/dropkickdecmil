(defproject f4f "0.1.0-SNAPSHOT"
  :source-paths ["."]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]
                 [pani "0.0.2"]
                 [sablono "0.2.22"]
                 [cljs-uuid "0.0.4"]
                 [leiningen "2.5.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :min-lein-version "2.5.0"

  :cljsbuild {:builds {:dev {:source-paths ["."]
                             :compiler {:output-to     "./js/f4f.js"
                                        :output-dir    "./js/out"
                                        :source-map    "./js/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :externs       ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}})

