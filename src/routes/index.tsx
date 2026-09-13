import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import bloodCellBg from '../blood-image.jpg'
import microscopeImg from '../microscope.png'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="home-container">
      <div
        className={`card-scene${flipped ? ' is-flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
        title="Cliquez pour retourner la carte"
      >
        <div className="card-body">

          {/* ── RECTO ── */}
          <div
            className="card-face card-front"
            style={{ backgroundImage: `url(${bloodCellBg})` }}
          >
            {/* panneau central semi-transparent */}
            <div className="front-panel">
              <p className="front-eyebrow">Invitation</p>
              <h1 className="front-title">Thèse de Kim</h1>
              <p className="front-subtitle">
                Anomalies phénotypiques des érythroblastes&nbsp;: utilité
                <br />dans le diagnostic des syndromes myélodysplasiques
              </p>
              <div className="front-rule" />
              <p className="front-date">Mercredi 30 Septembre 2026</p>
            </div>
          </div>

          {/* ── VERSO ── */}
          <div className="card-face card-back">
            <div className="back-inner">

              <div className="back-section">
                <h2 className="back-heading">Soutenance de Thèse</h2>
                <div className="back-rule" />
                <p className="back-time">18h00</p>
                <p className="back-location">
                  Campus du Thil - Salle des Thèses - E006
                </p>
              </div>

              <div className="back-section">
                <h2 className="back-heading">Pot de Thèse</h2>
                <div className="back-rule" />
                <p className="back-time">A partir de 19h30</p>
                <p className="back-location">
                  Les Rives - 59 Quai Charles Tellier, Amiens
                </p>
              </div>

              <img
                src={microscopeImg}
                alt="Microscope"
                className="back-microscope"
              />
            </div>
          </div>

        </div>
      </div>

      <p className="flip-hint">
        {flipped ? '← cliquez pour voir le recto' : 'cliquez pour voir le verso →'}
      </p>
    </div>
  )
}
