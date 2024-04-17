// Load the Map and MapView modules
require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/config",
    "esri/widgets/Legend",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/core/reactiveUtils",
    "esri/widgets/Locate",
    "esri/widgets/LayerList"
],
    function (WebMap, MapView, esriConfig, Legend, ScaleBar, Home, Expand, BasemapGallery, reactiveUtils, Locate, LayerList) {
        esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal";

        // Create a Map instance
        const myMap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "f89a599ed30f430b89af2c700e25eb3a"
            }
        });
        const view = new MapView({
            map: myMap,
            container: "viewDiv",
        });

        const layerlist = new LayerList({
            container: document.createElement("div"),
            view: view,
            container: "layerlist"
        });
        // const layerListExpand = new Expand({
        //     view: view,
        //     content: basemapgallery

        // });
        // view.ui.add(layerListExpand, "top-right");

        const legend = new Legend({
            container: document.createElement("div"),
            view: view,
            container: "legend-container",
        });

        //LocateWidget
        let locateWidget = new Locate({
            view: view,
        });
        view.ui.add(locateWidget, "top-left");

        //Scalebar
        let scaleBar = new ScaleBar({
            view: view,
            unit: "metric"
        });
        view.ui.add(scaleBar, {
            position: "bottom-right"
        });

        //HomeWidget
        let homeWidget = new Home({
            view: view
        });
        view.ui.add(homeWidget, "top-left");


        // MODALS //
        const appDetailModalBtn = document.getElementById("app-details-action");
        const appDetailModalEl = document.getElementById("app-details-modal");
        appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open });



    });