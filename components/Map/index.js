import React from 'react'

const Map = (props) => {

    return(
        <section className="wpo-map-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12 col-12">
                        <div className="wpo-map-item">
                            <iframe width="100%" height="400"  scrolling="no" title="2019-nCoV" 
                                src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
                                >
                            </iframe>                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map;