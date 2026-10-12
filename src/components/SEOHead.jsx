import React, { useEffect } from 'react';

export default function SEOHead({ title, description, keywords, canonicalPath = "" }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.content = description;
    }

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.content = keywords;
    }

    // 4. Update OpenGraph Tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': 'https://harineecatering.com/logo.jpeg',
      'og:type': 'website',
      'og:locale': 'en_IN',
      'og:site_name': 'Harinee Catering Trichy'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // 5. Inject / Update Schema.org JSON-LD for LocalBusiness & Catering Service
    let schemaScript = document.getElementById('json-ld-catering');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-catering';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": ["FoodEstablishment", "CateringService", "LocalBusiness"],
      "name": "Harinee Catering Service",
      "alternateName": "ஹரிணி கேட்டரிங் சர்வீஸ்",
      "image": "https://harineecatering.com/logo.jpeg",
      "description": description || "Authentic pure vegetarian South Indian catering for weddings, receptions, seemantham and events in Trichy.",
      "telephone": "+919698297590",
      "priceRange": "₹₹ (₹180 - ₹800 per plate)",
      "servesCuisine": "South Indian Pure Vegetarian, Tamil Traditional Feast",
      "founder": [
        {
          "@type": "Person",
          "name": "V. Manivannan",
          "jobTitle": "Founder"
        },
        {
          "@type": "Person",
          "name": "Deepa",
          "jobTitle": "Co-Founder"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "No. 23, Ravi Mini Hall, Karur Bypass Road",
          "addressLocality": "Tiruchirappalli",
          "addressRegion": "Tamil Nadu",
          "postalCode": "620002",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Peramangalam (A)",
          "addressLocality": "Tiruchirappalli",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "180"
      }
    };

    schemaScript.text = JSON.stringify(structuredData);

  }, [title, description, keywords, canonicalPath]);

  return null;
}
