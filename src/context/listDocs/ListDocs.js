import React from "react";
import './CardsDocs.css'
export  const ListDocs = (
    {
        titledoc='Ultimos documentos Publicados', group='Group: Support', 
    },
    {
        title1='Analisis de investigacion sobre radio en Bolivia ...',
        details1='View details',
        pag1='321 Pag.',
        title2='Análisis bibliométrico y de redes sociales en tesis ...',
        details2='View details',
        pag2='120 Pag.',
    },

) =>{
    return (
        <div className="docs" media="only screen and (max-width: 45rem)">
            <div>
                <p className="lyrics1">{titledoc}</p>
                <p className="group">{group}</p>
                <ul>
                    <div className="ticket1">
                        <div>
                            <p className="lyricsticket">{title1}</p>
                        </div>
                        <div className="details">
                            <p className="lyricsview">{details1}</p>
                        </div>
                        <div>
                            <p className="lyricspag">{pag1}</p>
                        </div>
                    </div>

                    <div className="divider"> </div>

                    <div className="ticket2">
                        <div>
                            <p className="lyricsticket">{title2}</p>
                            </div>
                            <div className="details2">
                                <p className="lyricsview">{details2}</p>
                            </div>
                            <div>
                                <p className="lyricspag">{pag2}</p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}