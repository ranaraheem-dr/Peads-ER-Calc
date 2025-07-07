// Pediatric Emergency Room Calculator - Main Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  
  // Check if required globals are available
  if (typeof medicationDatabase === 'undefined') {
    console.error('medicationDatabase is not defined');
    alert('Error: Medication database not loaded. Please refresh the page.');
    return;
  }
  
  if (typeof doseCalculator === 'undefined') {
    console.error('doseCalculator is not defined');
    alert('Error: Dose calculator not loaded. Please refresh the page.');
    return;
  }
  
  console.log('All dependencies loaded successfully');

  // Initialize calculator
  const calculator = new PeadsERCalculator();
});

class PeadsERCalculator {
  constructor() {
    this.currentWeight = 0;
    this.currentResults = {};
    this.deferredInstallPrompt = null;
    this.isOffline = false;
    
    this.initializeApp();
    this.setupEventListeners();
    this.registerServiceWorker();
  }

  initializeApp() {
    console.log('Initializing calculator...');
    
    // Check if app is running offline
    this.isOffline = !navigator.onLine;
    
    // Load saved weight from localStorage
    const savedWeight = localStorage.getItem('lastWeight');
    if (savedWeight) {
      const weightInput = document.getElementById('weight');
      if (weightInput) {
        weightInput.value = savedWeight;
      }
    }
    
    // Initialize UI
    this.updateOfflineStatus();
    this.setupPWAInstallPrompt();
    
    console.log('Paeds ER Calculator initialized');
  }

  setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Calculate button
    const calculateButton = document.getElementById('calculate-button');
    if (calculateButton) {
      calculateButton.addEventListener('click', () => {
        console.log('Calculate button clicked');
        this.calculateDoses();
      });
    }

    // Weight input - calculate on enter
    const weightInput = document.getElementById('weight');
    if (weightInput) {
      weightInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.calculateDoses();
        }
      });

      // Weight input - save on change
      weightInput.addEventListener('input', (e) => {
        localStorage.setItem('lastWeight', e.target.value);
      });
    }

    // Instructions toggle
    const instructionsLink = document.getElementById('instructions-link');
    if (instructionsLink) {
      instructionsLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleInstructions();
      });
    }

    // Install button
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.addEventListener('click', () => {
        this.installPWA();
      });
    }

    // Online/offline detection
    window.addEventListener('online', () => {
      this.isOffline = false;
      this.updateOfflineStatus();
    });

    window.addEventListener('offline', () => {
      this.isOffline = true;
      this.updateOfflineStatus();
    });
    
    console.log('Event listeners set up successfully');
  }

  calculateDoses() {
    console.log('Calculate doses called');
    
    const weightInput = document.getElementById('weight');
    if (!weightInput) {
      console.error('Weight input not found');
      return;
    }
    
    const weight = parseFloat(weightInput.value);
    console.log('Weight entered:', weight);

    // Validate input
    if (isNaN(weight) || weight <= 0) {
      alert('Please enter a valid weight (0.1 - 150 kg)');
      weightInput.focus();
      return;
    }

    if (weight > 150) {
      alert('Weight seems too high. Please check and re-enter.');
      weightInput.focus();
      return;
    }

    this.currentWeight = weight;
    this.currentResults = {};

    console.log('Calculating doses for weight:', weight);
    console.log('Available medication categories:', Object.keys(medicationDatabase));

    // Calculate doses for each category
    try {
      Object.keys(medicationDatabase).forEach(category => {
        console.log('Processing category:', category);
        this.currentResults[category] = medicationDatabase[category].map(medication => {
          const result = doseCalculator.calculateDose(medication, weight);
          
          // Handle cases where calculation returns null
          if (!result) {
            console.warn('Null result for medication:', medication.name);
            return {
              ...medication,
              calculatedDose: 0,
              formattedDose: 'N/A',
              unit: medication.frequency || '',
              displayFormula: medication.formula || 'No formula available'
            };
          }
          
          return {
            ...medication,
            calculatedDose: result.value,
            formattedDose: doseCalculator.formatDose(result.value),
            unit: result.unit,
            displayFormula: result.formula
          };
        });
      });

      console.log('Calculation results:', this.currentResults);

      // Display results
      this.displayResults();
      
      // Save calculation to localStorage for offline use
      this.saveCalculationData();
      
    } catch (error) {
      console.error('Error during calculation:', error);
      alert('Error calculating doses. Please try again.');
    }
  }

  displayResults() {
    console.log('Displaying results...');
    
    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) {
      console.error('Results div not found');
      return;
    }
    
    let html = `<div class="results-header">
      <h3>Calculated Doses for ${this.currentWeight}kg</h3>
      <p class="calculation-time">Calculated at: ${new Date().toLocaleString()}</p>
    </div>`;

    // Category display order for clinical workflow
    const categoryOrder = [
      'dehydrationPlan',
      'fluidRates', 
      'resuscitation',
      'antibiotics',
      'antiepileptics',
      'cardioversion',
      'infusions',
      'miscellaneous',
      'bloodProducts',
      'syrups'
    ];

    // Category display names
    const categoryNames = {
      dehydrationPlan: '🩸 Dehydration Management',
      fluidRates: '💧 Fluid Therapy',
      resuscitation: '🚨 Resuscitation',
      antibiotics: '💊 Antibiotics & Antimicrobials',
      antiepileptics: '🧠 Antiepileptics',
      cardioversion: '⚡ Cardioversion',
      infusions: '🔄 Continuous Infusions',
      miscellaneous: '📋 Miscellaneous',
      bloodProducts: '🩸 Blood Products',
      syrups: '🍯 Oral Syrups'
    };

    categoryOrder.forEach(category => {
      if (this.currentResults[category] && this.currentResults[category].length > 0) {
        html += `<div class="category-section">
          <h4 class="category-header">${categoryNames[category] || category}</h4>
          <div class="medications-grid">`;

        this.currentResults[category].forEach(med => {
          const alertClass = this.getDoseAlertClass(med);
          html += `<div class="medication-card ${alertClass}">
            <div class="med-name">${med.name}</div>
            <div class="med-dose">${med.formattedDose} ${med.unit}</div>
            <div class="med-formula">${med.displayFormula}</div>
            ${med.special ? '<div class="med-special">⚠️ Special dosing rules applied</div>' : ''}
          </div>`;
        });

        html += '</div></div>';
      }
    });

    if (this.isOffline) {
      html += '<div class="offline-notice">📱 Working offline - Data available locally</div>';
    }

    resultsDiv.innerHTML = html;
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
    
    console.log('Results displayed successfully');
  }

  getDoseAlertClass(medication) {
    // Add visual indicators for high-alert medications
    const highAlertMeds = ['Adrenaline', 'Noradrenaline', 'Dopamine', 'Atropine', 'Bicarbonate'];
    
    if (highAlertMeds.some(alert => medication.name.includes(alert))) {
      return 'high-alert';
    }
    
    if (medication.category === 'resuscitation') {
      return 'emergency';
    }
    
    return '';
  }

  saveCalculationData() {
    const calculationData = {
      weight: this.currentWeight,
      results: this.currentResults,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('lastCalculation', JSON.stringify(calculationData));
    
    // Keep history of last 10 calculations
    let history = JSON.parse(localStorage.getItem('calculationHistory') || '[]');
    history.unshift(calculationData);
    history = history.slice(0, 10);
    localStorage.setItem('calculationHistory', JSON.stringify(history));
  }

  toggleInstructions() {
    const instructions = document.getElementById('instructions');
    if (instructions) {
      const isVisible = instructions.style.display !== 'none';
      instructions.style.display = isVisible ? 'none' : 'block';
    }
  }

  setupPWAInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredInstallPrompt = e;
      const installButton = document.getElementById('install-button');
      if (installButton) {
        installButton.style.display = 'block';
      }
    });

    window.addEventListener('appinstalled', () => {
      const installButton = document.getElementById('install-button');
      if (installButton) {
        installButton.style.display = 'none';
      }
      this.deferredInstallPrompt = null;
    });
  }

  async installPWA() {
    if (!this.deferredInstallPrompt) {
      alert('App installation not available. Please use your browser\'s install option.');
      return;
    }

    const result = await this.deferredInstallPrompt.prompt();
    console.log('PWA install prompt result:', result);
    
    this.deferredInstallPrompt = null;
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'none';
    }
  }

  updateOfflineStatus() {
    const statusDiv = document.querySelector('.offline-status');
    if (statusDiv) {
      statusDiv.textContent = this.isOffline ? '📴 Offline' : '🌐 Online';
    }
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('./sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }
}

// Global calculate function for backward compatibility
function calculate() {
  if (window.calculator) {
    window.calculator.calculateDoses();
  } else {
    console.error('Calculator not initialized');
  }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PeadsERCalculator;
}