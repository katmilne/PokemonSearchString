"use client";

import React from 'react';
import Link from 'next/link';

export default function StorageManagementPage() {
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
        <div className="bg-white shadow-lg border border-gray-300 rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">My Storage Management Method</h1>
          <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            A comprehensive two-stage system for organizing your entire Pokémon collection efficiently
          </p>
          
          <div className="space-y-8">
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-blue-800 border-b-2 border-blue-200 pb-2">Stage 1: "Bin" Search for Mass Transfer</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-sm mb-2">The Search (Color-Coded):</h3>
                  <div className="bg-white px-2 py-1 rounded text-xs border overflow-x-auto">
                    <span className="bg-green-100 text-green-800 px-1 rounded">!shiny</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!totrade</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!favorite</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!topurify</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!sosweetest</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!xxl</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!toevolve</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!xxs</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!event</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!shadow</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!4*</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!3*</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!2*candy</span>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Built-in Filters</span>
                      <span className="text-gray-600">Ready to use in Pokémon Go</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Custom Tags</span>
                      <span className="text-gray-600">Requires manual tagging</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">What it does:</h4>
                    <p className="text-gray-700">
                      This search shows all Pokémon that are <strong>2★ or less</strong> and don't have any special attributes you want to keep. 
                      Perfect for finding Pokémon safe to transfer when cleaning up your storage!
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Built-in filters it excludes:</h4>
                    <ul className="text-gray-700 list-disc list-inside ml-2 space-y-1">
                      <li><code>shiny</code> - Keep all shiny Pokémon</li>
                      <li><code>favorite</code> - Keep favorited Pokémon</li>
                      <li><code>xxl/xxs</code> - Keep size variants</li>
                      <li><code>event</code> - Keep costume/event Pokémon</li>
                      <li><code>shadow</code> - Keep Shadow Pokémon</li>
                      <li><code>4*/3*</code> - Keep high IV Pokémon</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">My custom tags it excludes:</h4>
                    <ul className="text-gray-700 list-disc list-inside ml-2 space-y-1">
                      <li><code>totrade</code> - Tagged for trading</li>
                      <li><code>topurify</code> - Shadow Pokémon to purify</li>
                      <li><code>toevolve</code> - Tagged for evolution (XP/challenges)</li>
                      <li><code>sosweetest</code> - Cute Pokémon to keep</li>
                      <li><code>2*candy</code> - Pokémon I will keep and transfer when there is a special 2 times transfer candy event</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How to use this "Bin" search safely:</h4>
                    <ol className="text-gray-700 list-decimal list-inside ml-2 space-y-1">
                      <li>Save this search as a <strong>favorite</strong> in Pokémon Go (name it "Bin" or "Safe to Transfer")</li>
                      <li>Use the favorite to filter your storage</li>
                      <li><strong>Select all results</strong> by tapping and highlighting them</li>
                      <li><strong>Mass transfer</strong> them without worry - you know nothing valuable will be transferred!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-300 rounded p-3 mt-3">
                    <p className="text-yellow-800 text-sm font-medium">
                      <strong>Important - PvP Players:</strong> This search doesn't preserve Pokémon with specific PvP IVs (like 0/15/15 for Great League). 
                      If you play PvP, consider adding filters to exclude Pokémon with PvP-relevant IV patterns before using this for mass transfers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-green-800 border-b-2 border-green-200 pb-2">Stage 2: "Categorize" Search for Organizing Remaining Pokémon</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-sm mb-2">The Search (Color-Coded):</h3>
                  <div className="bg-white px-2 py-1 rounded text-xs border overflow-x-auto">
                    <span className="bg-green-100 text-green-800 px-1 rounded">!shiny</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!totrade</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!favorite</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!topurify</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!sosweetest</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!toevolve</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!event</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!shadow</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">!4*</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!2*candy</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!chonk</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!smol</span>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Built-in Filters</span>
                      <span className="text-gray-600">Ready to use</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Custom Tags</span>
                      <span className="text-gray-600">Requires tagging</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">What it does:</h4>
                    <p className="text-gray-700">
                      After using the "Bin" search, this shows all remaining <strong>uncategorized Pokémon</strong> that need manual review and tagging. 
                      These are your 3★+ Pokémon that haven't been sorted yet.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Additional custom tags it excludes:</h4>
                    <ul className="text-gray-700 list-disc list-inside ml-2 space-y-1">
                      <li><code>chonk</code> - Largest XXL Pokémon of each species</li>
                      <li><code>smol</code> - Smallest XXS Pokémon of each species</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Manual Review Process:</h4>
                    <p className="text-gray-700 mb-2">
                      After using the "Bin" search to remove all unwanted Pokémon, use this search to find remaining uncategorized Pokémon. 
                      Review each one manually and tag appropriately:
                    </p>
                    <ul className="text-gray-700 list-disc list-inside ml-2 space-y-1">
                      <li>Tag as <code>totrade</code> if suitable for trading</li>
                      <li>Tag as <code>toevolve</code> if needed for XP or challenges</li>
                      <li>Tag as <code>chonk</code> if it's the largest XXL of its species</li>
                      <li>Tag as <code>smol</code> if it's the smallest XXS of its species</li>
                      <li>Transfer if it doesn't serve any purpose</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-purple-800 border-b-2 border-purple-200 pb-2">Complete Workflow Summary</h2>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <ol className="text-gray-700 list-decimal list-inside space-y-3 text-sm">
                  <li>
                    <strong>Mass Clean (Stage 1):</strong> Use the "Bin" search to mass transfer low-value Pokémon safely
                  </li>
                  <li>
                    <strong>Manual Sort (Stage 2):</strong> Use the "Categorize" search to find remaining uncategorized Pokémon
                  </li>
                  <li>
                    <strong>Individual Review:</strong> Manually examine each result and tag appropriately or transfer
                  </li>
                  <li>
                    <strong>System Complete:</strong> When both searches return empty results, your entire storage is organized!
                  </li>
                </ol>
                
                <div className="bg-purple-100 border border-purple-300 rounded p-3 mt-4">
                  <p className="text-purple-800 text-sm font-medium">
                    <strong>Success Indicator:</strong> This system ensures no Pokémon falls through the cracks - everything is either transferred or properly tagged for its purpose. 
                    The workflow becomes much more manageable since most Pokémon are handled automatically in Stage 1.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-orange-800 border-b-2 border-orange-200 pb-2">Daily Quick Checks</h2>
              <p className="text-gray-600 text-sm mb-3">
                Simple searches I use daily to quickly spot new catches that might need attention
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* New Shinies Check */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-bold text-base mb-2 text-yellow-800 border-l-4 border-yellow-400 pl-3">New Shinies Check</h3>
                  <div className="bg-white px-2 py-1 rounded text-xs border overflow-x-auto mb-2">
                    <span className="bg-green-100 text-green-800 px-1 rounded">shiny</span>&
                    <span className="bg-green-100 text-green-800 px-1 rounded">age0</span>
                  </div>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p><strong>What it does:</strong> Shows all shiny Pokémon caught today</p>
                    <p><strong>Why I use it:</strong> Quick daily check to see if I caught any new shinies without realizing it during busy catching sessions</p>
                    <p className="text-green-700 font-medium">Ready to use: Uses only built-in filters!</p>
                  </div>
                </div>

                {/* New Hundos Check */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-bold text-base mb-2 text-orange-800 border-l-4 border-orange-400 pl-3">Untagged Hundos Check</h3>
                  <div className="bg-white px-2 py-1 rounded text-xs border overflow-x-auto mb-2">
                    <span className="bg-green-100 text-green-800 px-1 rounded">4*</span>&
                    <span className="bg-red-100 text-red-800 px-1 rounded">!hundo</span>
                  </div>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p><strong>What it does:</strong> Shows all perfect IV Pokémon that haven't been tagged with my custom "hundo" tag yet</p>
                    <p><strong>Why I use it:</strong> Ensures I don't miss any new perfect Pokémon and can tag them properly for easy filtering later</p>
                  </div>
                </div>

              </div>
              
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mt-4">
                <p className="text-cyan-800 text-xs">
                  💡 <strong>Pro Tip:</strong> Save these as favorites in Pokémon Go with names like "Daily Shiny Check" and "Hundo Check". 
                  Check them each frequently to quickly spot anything special from your recent catches!
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link 
            href="/about" 
            className="inline-flex items-center bg-pink-300 hover:bg-pink-200 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            About PokéString
          </Link>
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