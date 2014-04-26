(defproject mikegeorge-org "0.2.3"
  :description "The mikegeorge.org website"
  :url "http://mikegeorge.org"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [lib-noir "0.8.2"]
                 [compojure "1.1.5"]
                 [ring-server "0.3.1"]
                 [selmer "0.6.5"]
                 [markdown-clj "0.9.32"]]
  :plugins [[lein-ring "0.8.7"]]
  :ring {:handler mikegeorge-org.handler/app
         :init    mikegeorge-org.handler/init
         :destroy mikegeorge-org.handler/destroy}
  :aot :all
  :profiles
  {:production {:ring {:open-browser? false
                       :stacktraces?  false
                       :auto-reload?  false}}
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.2.2"]]}}
  :min-lein-version "2.0.0")
