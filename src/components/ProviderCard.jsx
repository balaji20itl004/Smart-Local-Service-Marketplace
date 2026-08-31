import {
  Star,
  MapPin,
  BadgeCheck,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

function ProviderCard({ provider }) {
  return (
    <article className="provider-card">

      <div className="provider-image-container">

        <img
          src={provider.image}
          alt={provider.name}
          className="provider-image"
        />

        <button className="favorite-button">
          <Heart size={18} />
        </button>

        {provider.verified && (
          <div className="verified-badge">
            <BadgeCheck size={15} />
            Verified
          </div>
        )}

      </div>

      <div className="provider-content">

        <div className="provider-category">
          {provider.category}
        </div>

        <h3>{provider.name}</h3>

        <div className="provider-rating">

          <Star
            size={16}
            fill="currentColor"
          />

          <strong>{provider.rating}</strong>

          <span>
            ({provider.reviews} reviews)
          </span>

        </div>

        <div className="provider-location">

          <MapPin size={15} />

          <span>
            {provider.distance} • {provider.location}
          </span>

        </div>

        <div className="provider-info">

          <span>
            {provider.experience} years experience
          </span>

          <span>
            From ₹{provider.price}
          </span>

        </div>

        <div className="provider-status">

          <span
            className={
              provider.available
                ? "available"
                : "unavailable"
            }
          >
            {provider.available
              ? "Available today"
              : "Currently unavailable"}
          </span>

        </div>

        <div className="provider-actions">

          <Link
            to={`/providers/${provider.id}`}
            className="view-profile-button"
          >
            View Profile
          </Link>

          <Link
            to={`/booking/${provider.id}`}
            className="book-button"
          >
            Book Now
          </Link>

        </div>

      </div>

    </article>
  );
}

export default ProviderCard;