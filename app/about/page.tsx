"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-4xl mx-auto py-6">
        
        {/* Back to Home Link */}
        <div className="mb-4">
          <Link href="/" className="text-zinc-600 hover:text-zinc-800 text-sm">
            ← Back to Search Builder
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">About PokéString</h1>
          
          <div className="space-y-4">
            <section>
              <h2 className="text-lg font-semibold mb-2">What is PokéString?</h2>
              <p className="text-gray-700">
                PokéString is a web tool designed to help Pokémon Go players create advanced search strings 
                for filtering their Pokémon collection. Instead of remembering complex search syntax, 
                you can simply click buttons to build your perfect search query.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">How It Works</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>1. Choose Your Filters:</strong> Click on any filter buttons (Types, Status, Region, etc.) to add them to your search.</p>
                <p><strong>2. Set Operators:</strong> Use AND (&) to find Pokémon that match ALL selected filters, or OR (,) to find Pokémon that match ANY of the filters.</p>
                <p><strong>3. Negate Filters:</strong> Turn on "Not" mode to exclude Pokémon with certain attributes.</p>
                <p><strong>4. Add Specific Searches:</strong> Enter Pokémon names, Pokédex numbers, or CP ranges using the input boxes.</p>
                <p><strong>5. Copy & Use:</strong> Copy your completed search string and paste it into Pokémon Go's search bar.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Filter Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p><strong>Types:</strong> Fire, Water, Grass, Electric, etc.</p>
                  <p><strong>Status:</strong> Legendary, Shiny, Lucky, Shadow, etc.</p>
                  <p><strong>Regions:</strong> Kanto, Johto, Hoenn, Sinnoh, etc.</p>
                  <p><strong>Appraisal:</strong> 0★ to 4★ (Perfect) ratings</p>
                </div>
                <div>
                  <p><strong>Evolution:</strong> Can Evolve, Mega Evolve, etc.</p>
                  <p><strong>Acquisition:</strong> Hatched, Traded, Raid, etc.</p>
                  <p><strong>Buddy Level:</strong> Good/Great/Ultra/Best Buddies</p>
                  <p><strong>Size & Gender:</strong> XXS/XL sizes, Male/Female</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Quick Tips</h2>
              <ul className="text-gray-700 space-y-1 list-disc list-inside">
                <li>Use the <strong>Remove Last</strong> button (↶) to undo your most recent filter</li>
                <li>Use the <strong>Clear All</strong> button (×) to start over completely</li>
                <li>Pokemon names support evolution families with the <strong>"+Evos"</strong> button</li>
                <li>CP searches support both exact values (CP=1500) and ranges (CP100-1500)</li>
                <li>Search strings are built in real-time as you click buttons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">💡 Pro Tip: Save Your Searches in Pokémon Go</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  Once you've created and used a search string in Pokémon Go, you can save it for quick access later:
                </p>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside text-sm">
                  <li><strong>Paste your search string</strong> into Pokémon Go's search bar and search</li>
                  <li><strong>Long press (hold down)</strong> on the search in your "Recent Searches" list</li>
                  <li><strong>This will save it to your permanent Favorites"</strong></li>
                  <li><strong>Long press the favorited search</strong> to rename it to something convenient like "PvP Ready" or "For Trading"</li>
                </ol>
                <p className="text-gray-600 text-sm mt-2 italic">
                  This way you can quickly access your complex searches without rebuilding them each time!
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Example Searches</h2>
              <div className="bg-white border rounded p-3 space-y-2 text-sm">
                <p><code className="bg-gray-100 px-1 rounded">fire&legendary</code> - Fire-type Legendary Pokémon</p>
                <p><code className="bg-gray-100 px-1 rounded">shiny,4*</code> - Shiny OR Perfect Pokémon</p>
                <p><code className="bg-gray-100 px-1 rounded">!evolve&cp1500-2500</code> - Non-evolvable Pokémon with CP between 1500-2500</p>
                <p><code className="bg-gray-100 px-1 rounded">+pikachu&costume</code> - All Pikachu family with special costumes</p>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home Link (Bottom) */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center bg-zinc-800 hover:bg-zinc-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Start Building Your Search String
          </Link>
        </div>
      </div>
    </div>
  );
}