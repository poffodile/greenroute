import { Car, Train, Bus, Leaf, Clock, Coins } from "lucide-react";
import { routeOptions } from "../../data/routeData";
import "./RouteComparison.css";

function getTransportIcon(transport) {
  if (transport.includes("Car")) return <Car size={26} />;
  if (transport.includes("Train")) return <Train size={26} />;
  if (transport.includes("Bus")) return <Bus size={26} />;
  return <Leaf size={26} />;
}

function RouteComparison() {
  return (
    <section className="route-section">
      <div className="route-header">
        <p>ROUTE OPTIONS</p>
        <h2>Compare your journey choices</h2>
        <span>
          See time, cost, CO₂ emissions and rewards before choosing your route.
        </span>
      </div>

      <div className="route-card-grid">
        {routeOptions.map((route) => (
          <article
            key={route.id}
            className={
              route.recommended
                ? "route-card recommended-route"
                : "route-card"
            }
          >
            {route.recommended && (
              <div className="recommended-badge">
                <Leaf size={15} />
                Recommended
              </div>
            )}

            <div className="route-icon">
              {getTransportIcon(route.transport)}
            </div>

            <h3>{route.name}</h3>
            <p className="route-transport">{route.transport}</p>

            <div className="route-details">
              <div>
                <Clock size={17} />
                <span>{route.duration}</span>
              </div>

              <div>
                <Coins size={17} />
                <span>{route.cost}</span>
              </div>

              <div>
                <Leaf size={17} />
                <span>{route.co2}</span>
              </div>
            </div>

            <div className="route-points">
              {route.points}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RouteComparison;