import React from "react";
import './CardsDocs.css'
export  const ListDocs = () => {
    return (
        <div className="docs" media="only screen and (max-width: 720px)">
            <div>
                <p className="lyrics1">
                            Ultimos Documentos Publicados
                </p>
                <p className="group">
                    Group: Support
                </p>
                <ul>
                    <div className="ticket1">
                        <div>
                            <p className="lyricsticket">Analisis de investigacion sobre radio en Bolivia ...</p>
                        </div>
                        <div className="details">
                            <p className="lyricsview">View details</p>
                        </div>
                        <div>
                            <p className="lyricspag">321 Pag.</p>
                        </div>
                    </div>

                    <div className="divider"> </div>

                    <div className="ticket2">
                        <div>
                            <p className="lyricsticket">Análisis bibliométrico y de redes sociales en tesis ...</p>
                            </div>
                            <div className="details2">
                                <p className="lyricsview">View details</p>
                            </div>
                            <div>
                                <p className="lyricspag">120 Pag.</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}