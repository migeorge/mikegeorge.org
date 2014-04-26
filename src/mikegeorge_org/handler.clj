(ns mikegeorge-org.handler
  (:require [compojure.core :refer [defroutes routes]]
            [compojure.route :as route]
            [compojure.handler :refer [site]]
            [mikegeorge-org.routes.home :refer [home-routes]]))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (println "mikegeorge.org is starting"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (println "mikegeorge.org is shutting down"))

(def app
  (-> (routes home-routes app-routes)
      (site)))
