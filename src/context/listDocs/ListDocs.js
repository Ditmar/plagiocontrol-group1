import React from "react";
import './CardsDocs.css'
export  const ListDocs = () => {
    return (
        <div className="docs">
            <div>
                <p className="letra1">
                            Ultimos Documentos ublicados
                </p>
                <p className="group">
                    Group: Support
                </p>
                <ul>
                    <div className="ticket1">
                        <div>
                            <p className="letraticket">Analisis de investigacion sobre radio en Bolivia ...</p>
                        </div>
                        <div className="details">
                            <p className="letraview">View details</p>
                        </div>
                        <div>
                            <p className="letrapag">321 Pag.</p>
                        </div>
                    </div>

                    <div className="divider"> </div>

                    <div className="ticket2">
                        <div>
                            <p className="letraticket">Análisis bibliométrico y de redes sociales en tesis ...</p>
                            </div>
                            <div className="details2">
                                <p className="letraview">View details</p>
                            </div>
                            <div>
                                <p className="letrapag">120 Pag.</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}