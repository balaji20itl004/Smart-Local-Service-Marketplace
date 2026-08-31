import { useState } from "react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProviderCard from "../components/ProviderCard";

import { services, providers } from "../data/mockData";

import "../styles/services.css";

function Services() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [minRating, setMinRating] = useState("0");

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      provider.category === selectedCategory;

    const matchesVerified =
      !verifiedOnly || provider.verified;

    const matchesAvailability =
      !availableOnly || provider.available;

    const matchesRating =
      provider.rating >= Number(minRating);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesVerified &&
      matchesAvailability &&
      matchesRating
    );
  });

  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* Page Header */}
        <section className="services-header">
          <div className="services-header-content">

            <p className="page-label">
              FIND LOCAL PROFESSIONALS
            </p>

            <h1>
              Find the right professional
              <span> for your needs</span>
            </h1>

            <p>
              Search and compare trusted service providers
              available near you.
            </p>

          </div>
        </section>

        {/* Search */}
        <section className="services-search-section">

          <div className="services-search">

            <div className="services-search-field">
              <Search size={20} />

              <input
                type="text"
                placeholder="Search for a service or provider..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="services-location">
              <MapPin size={19} />
              <span>Madurai</span>
            </div>

            <button className="services-search-button">
              Search
            </button>

          </div>

        </section>

        {/* Main Content */}
        <section className="services-content">

          {/* Sidebar */}
          <aside className="filter-sidebar">

            <div className="filter-title">
              <SlidersHorizontal size={19} />
              <h3>Filters</h3>
            </div>

            {/* Categories */}
            <div className="filter-group">

              <h4>Service Category</h4>

              <button
                className={
                  selectedCategory === "All"
                    ? "category-filter active"
                    : "category-filter"
                }
                onClick={() => setSelectedCategory("All")}
              >
                All Services
              </button>

              {services.map((service) => (
                <button
                  key={service.id}
                  className={
                    selectedCategory === service.name
                      ? "category-filter active"
                      : "category-filter"
                  }
                  onClick={() =>
                    setSelectedCategory(service.name)
                  }
                >
                  <span>{service.icon}</span>
                  {service.name}
                </button>
              ))}

            </div>

            {/* Rating */}
            <div className="filter-group">

              <h4>Minimum Rating</h4>

              <select
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
              >
                <option value="0">All Ratings</option>
                <option value="4">4.0+ ⭐</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.8">4.8+ ⭐</option>
              </select>

            </div>

            {/* Checkboxes */}
            <div className="filter-group">

              <h4>Availability</h4>

              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) =>
                    setVerifiedOnly(e.target.checked)
                  }
                />
                Verified providers
              </label>

              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) =>
                    setAvailableOnly(e.target.checked)
                  }
                />
                Available now
              </label>

            </div>

          </aside>

          {/* Results */}
          <div className="services-results">

            <div className="results-header">

              <div>
                <h2>
                  {selectedCategory === "All"
                    ? "All Professionals"
                    : selectedCategory}
                </h2>

                <p>
                  {filteredProviders.length} professionals found
                </p>
              </div>

              <select className="sort-select">
                <option>Recommended</option>
                <option>Highest Rated</option>
                <option>Lowest Price</option>
              </select>

            </div>

            {filteredProviders.length > 0 ? (
              <div className="providers-grid">

                {filteredProviders.map((provider) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                  />
                ))}

              </div>
            ) : (
              <div className="no-results">
                <h3>No professionals found</h3>
                <p>
                  Try changing your search or filters.
                </p>
              </div>
            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;