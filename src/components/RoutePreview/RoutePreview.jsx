import {
    Bus,
    Check,
    Footprints,
    Leaf,
    MapPin,
    Navigation,
    Star,
    Train,
  } from "lucide-react";
  
  import "./RoutePreview.css";
  
  function RoutePreview() {
    return (
      <section className="preview-section">
        <div className="preview-card">
          <div className="map-panel">
            <div className="route-filter-box">
              <h4>Show Routes</h4>
  
              <p><Check size={14} /> Greenest Route</p>
              <p><Check size={14} /> Fastest Route</p>
              <p><Check size={14} /> Cheapest Route</p>
            </div>
  
            <div className="map-label start-label">
              <MapPin size={16} />
              <span>From<br />Liverpool</span>
            </div>
  
            <div className="map-label end-label">
              <Navigation size={16} />
              <span>To<br />Manchester</span>
            </div>
  
            <div className="route-line green-line"></div>
            <div className="route-line blue-line"></div>
            <div className="route-line orange-line"></div>
          </div>
  
          <aside className="route-details-panel">
            <div className="details-header">
              <Leaf size={20} />
              <div>
                <h3>Recommended Green Route</h3>
                <p>This route produces the least CO₂ emissions and earns the most points.</p>
              </div>
            </div>
  
            <div className="journey-steps">
              <div className="journey-step">
                <Train size={18} />
                <div>
                  <strong>Liverpool Lime Street</strong>
                  <span>Train · 09:15 AM</span>
                </div>
              </div>
  
              <div className="journey-step">
                <Footprints size={18} />
                <div>
                  <strong>Manchester Oxford Road</strong>
                  <span>Walk · 5 mins</span>
                </div>
              </div>
  
              <div className="journey-step">
                <MapPin size={18} />
                <div>
                  <strong>Final Destination</strong>
                  <span>Arrive by 09:57 AM</span>
                </div>
              </div>
            </div>
  
            <div className="route-impact-grid">
              <div className="impact-mini-card">
                <p>CO₂ Saved</p>
                <h4>4.1kg</h4>
                <span>vs fastest route</span>
              </div>
  
              <div className="impact-mini-card">
                <p>Points Earned</p>
                <h4>+80</h4>
                <span>On this journey</span>
                <Star className="star-icon" size={18} />
              </div>
            </div>
  
            <button className="route-details-button">
              View Full Route Details
            </button>
          </aside>
        </div>
      </section>
    );
  }
  
  export default RoutePreview;