// Comprehensive pediatric medication database with structured schema
const medicationDatabase = {
  dehydrationPlan: [
    { name: "Plan A (Rehydration)", dose: 50, frequency: "ml/kg", formula: "Given orally over 4 hours", category: "fluid" },
    { name: "Plan B (Moderate)", dose: 100, frequency: "ml/kg", formula: "Given over 4 hours", category: "fluid" },
    { name: "Plan C (Severe - 30% fluid)", dose: 30, frequency: "ml/kg", formula: "Over 30 mins in child and 1 hr in infant", category: "fluid" },
    { name: "Plan C (Severe - 70% fluid)", dose: 70, frequency: "ml/kg", formula: "Over 5 hrs in infant and 2.5 hrs in child", category: "fluid" }
  ],

  fluidRates: [
    { name: "Fluid Bolus (10ml/kg)", dose: 10, frequency: "ml/kg", formula: "Given as bolus over 30-60 min", category: "fluid" },
    { name: "Fluid Bolus (20ml/kg)", dose: 20, frequency: "ml/kg", formula: "Given as bolus over 30-60 min", category: "fluid" },
    { name: "Maintenance Fluid (1 hour)", dose: 4, frequency: "ml/kg/hr", formula: "Given as continuous infusion", category: "fluid" },
    { name: "Maintenance Fluid (8 hours)", dose: 32, frequency: "ml/kg", formula: "Given over 8 hours", category: "fluid" },
    { name: "Maintenance Fluid (24 hours)", dose: 96, frequency: "ml/kg", formula: "Given over 24 hours", category: "fluid" }
  ],

  antibiotics: [
    { name: "Augmentin", dose: 30, frequency: "mg/kg/dose", formula: "30mg/kg/dose TDS", category: "antibiotic" },
    { name: "Amikacin", dose: 15, frequency: "mg/kg/dose", formula: "15-22.5mg/kg/24 hrs or 7.5mg/kg/dose BD", category: "antibiotic" },
    { name: "Tanzo", dose: 90, frequency: "mg/kg/day", formula: "90mg/kg/day TDS", category: "antibiotic" },
    { name: "Vancomycin - Empirical", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/dose BD", category: "antibiotic" },
    { name: "Vancomycin - Meningitic", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose BD", category: "antibiotic" },
    { name: "Ceftriaxone - Empirical", dose: 50, frequency: "mg/kg/dose", formula: "50mg/kg/dose OD", category: "antibiotic" },
    { name: "Ceftriaxone - Enteric", dose: 75, frequency: "mg/kg/dose", formula: "75mg/kg/dose OD", category: "antibiotic" },
    { name: "Ceftriaxone - Meningitic", dose: 100, frequency: "mg/kg/dose", formula: "100mg/kg/dose OD", category: "antibiotic" },
    { name: "Ciprofloxacin", dose: 20, frequency: "mg/kg/dose", formula: "20-30mg/kg/24hrs BD", category: "antibiotic" },
    { name: "Meropenem", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose TDS", category: "antibiotic" },
    { name: "Imipenem", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose TDS", category: "antibiotic" },
    { name: "Linezolid", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose BD", category: "antibiotic" },
    { name: "Sulzone", dose: 40, frequency: "mg/kg/dose", formula: "40-60mg/kg/day TDS", category: "antibiotic" },
    { name: "Targocid", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg BD for first 3 doses, then 5mg/kg OD", category: "antibiotic" },
    { name: "Colistin (Min)", dose: 25000, frequency: "IU/kg/dose", formula: "75,000IU/kg/day divided into TDS", category: "antibiotic" },
    { name: "Colistin (Max)", dose: 50000, frequency: "IU/kg/dose", formula: "150,000IU/kg/day divided into TDS", category: "antibiotic" },
    { name: "Flagyl (ml)", dose: 1.5, frequency: "ml/kg/dose", formula: "1.5ml/kg/dose TDS", category: "antibiotic" },
    { name: "Flagyl (mg)", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5mg/kg/dose TDS", category: "antibiotic" },
    { name: "Clarithromycin", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/day BD", category: "antibiotic" },
    { name: "Levofloxacin", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/day OD", category: "antibiotic" },
    { name: "Cefixime", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/day BD", category: "antibiotic" },
    { name: "Cefotaxime", dose: 50, frequency: "mg/kg/dose", formula: "50mg/kg/dose TDS", category: "antibiotic" },
    { name: "Streptomycin (Min)", dose: 500000, frequency: "IU/kg/dose", formula: "500,000IU/kg/dose OD", category: "antibiotic" },
    { name: "Streptomycin (Max)", dose: 1000000, frequency: "IU/kg/dose", formula: "1,000,000IU/kg/dose OD", category: "antibiotic" },
    { name: "Acyclovir (Empirical)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg TDS", category: "antiviral" },
    { name: "Acyclovir (Encephalitis)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg TDS", category: "antiviral" },
    { name: "Artemether (Stat)", dose: 3.6, frequency: "mg/kg/dose", formula: "3.6mg/kg/dose IM", category: "antimalarial" },
    { name: "Artemether (Maintenance)", dose: 1.6, frequency: "mg/kg/dose", formula: "1.6mg/kg OD IM", category: "antimalarial" },
    { name: "Nystatin Drops", dose: 0.1, frequency: "ml/kg/dose", formula: "0.1ml/kg TDS PO", category: "antifungal" },
    { name: "Rifampicin (Min)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose OD", category: "anti-TB" },
    { name: "Rifampicin (Max)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose OD", category: "anti-TB" },
    { name: "Isoniazid (Min)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose OD", category: "anti-TB" },
    { name: "Isoniazid (Max)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose OD", category: "anti-TB" },
    { name: "Pyrazinamide (Min)", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose OD", category: "anti-TB" },
    { name: "Pyrazinamide (Max)", dose: 35, frequency: "mg/kg/dose", formula: "35mg/kg/dose OD", category: "anti-TB" },
    { name: "Ethambutol (Min)", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/dose OD", category: "anti-TB" },
    { name: "Ethambutol (Max)", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose OD", category: "anti-TB" },
    { name: "Gentamicin", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5mg/kg/dose OD", category: "antibiotic" }
  ],

  resuscitation: [
    { name: "Atropine (Min)", dose: 0.01, frequency: "mg/kg/dose", formula: "0.01mg/kg IV", category: "resuscitation", special: "min_dose_0.1mg" },
    { name: "Atropine (Max)", dose: 0.03, frequency: "mg/kg/dose", formula: "0.03mg/kg IV", category: "resuscitation", special: "max_dose_0.5mg" },
    { name: "Bicarbonate (Min)", dose: 1, frequency: "mEq/kg/dose", formula: "1mEq/kg IV", category: "resuscitation" },
    { name: "Bicarbonate (Max)", dose: 2, frequency: "mEq/kg/dose", formula: "2mEq/kg IV", category: "resuscitation" },
    { name: "Calcium Chloride (Min)", dose: 0.1, frequency: "ml/kg/dose", formula: "0.1ml/kg IV", category: "resuscitation" },
    { name: "Calcium Chloride (Max)", dose: 0.3, frequency: "ml/kg/dose", formula: "0.3ml/kg IV", category: "resuscitation" },
    { name: "Calcium Gluconate (Min)", dose: 0.6, frequency: "ml/kg/dose", formula: "0.6ml/kg IV", category: "resuscitation" },
    { name: "Calcium Gluconate (Max)", dose: 1, frequency: "ml/kg/dose", formula: "1ml/kg IV", category: "resuscitation" },
    { name: "Dextrose", dose: 0.5, frequency: "g/kg/dose", formula: "0.5-1g/kg IV", category: "resuscitation" },
    { name: "Epinephrine (1:10,000)", dose: 10, frequency: "mcg/kg/dose", formula: "10mcg/kg IV", category: "resuscitation" },
    { name: "Lidocaine", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV", category: "resuscitation" }
  ],

  cardioversion: [
    { name: "Atrial Arrhythmias (Min)", dose: 0.5, frequency: "joule/kg", formula: "0.5 joule/kg", category: "cardioversion" },
    { name: "Atrial Arrhythmias (Max)", dose: 1, frequency: "joule/kg", formula: "1 joule/kg", category: "cardioversion" },
    { name: "Ventricular Fibrillation", dose: 2, frequency: "joule/kg", formula: "2 joules/kg", category: "cardioversion" },
    { name: "Ventricular Tachycardia (Min)", dose: 1, frequency: "joule/kg", formula: "1 joule/kg", category: "cardioversion" },
    { name: "Ventricular Tachycardia (Max)", dose: 2, frequency: "joule/kg", formula: "2 joules/kg", category: "cardioversion" },
    { name: "Adenosine", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg IV rapid push", category: "cardioversion" }
  ],

  antiepileptics: [
    { name: "Levetiracetam Loading", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV over 30-60 min", category: "antiepileptic" },
    { name: "Levetiracetam Maintenance (Min)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg BD", category: "antiepileptic" },
    { name: "Levetiracetam Maintenance (Max)", dose: 60, frequency: "mg/kg/dose", formula: "60mg/kg BD", category: "antiepileptic" },
    { name: "Valproate Loading", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV over 30-60 min", category: "antiepileptic" },
    { name: "Valproate Maintenance", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg BD", category: "antiepileptic" },
    { name: "Phenytoin", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV over 30-60 min", category: "antiepileptic" },
    { name: "Mannitol (Stat)", dose: 1, frequency: "g/kg/dose", formula: "1g/kg IV over 30-60 min", category: "antiepileptic" },
    { name: "Mannitol (Maintenance)", dose: 0.5, frequency: "g/kg/dose", formula: "0.5g/kg 6 hourly for 5 days", category: "antiepileptic" }
  ],

  infusions: [
    { name: "Dopamine", dose: 5, frequency: "mcg/kg/min", formula: "5-20 mcg/kg/min continuous", category: "infusion" },
    { name: "Adrenaline (Low)", dose: 0.05, frequency: "mcg/kg/min", formula: "0.05-0.3 mcg/kg/min", category: "infusion" },
    { name: "Adrenaline (High)", dose: 0.3, frequency: "mcg/kg/min", formula: "0.05-0.3 mcg/kg/min", category: "infusion" },
    { name: "Noradrenaline (Low)", dose: 0.05, frequency: "mcg/kg/min", formula: "0.05-0.5 mcg/kg/min", category: "infusion" },
    { name: "Noradrenaline (High)", dose: 0.5, frequency: "mcg/kg/min", formula: "0.05-0.5 mcg/kg/min", category: "infusion" },
    { name: "Dobutamine", dose: 5, frequency: "mcg/kg/min", formula: "5-20 mcg/kg/min continuous", category: "infusion" },
    { name: "Fentanyl (Low)", dose: 1, frequency: "mcg/kg/hr", formula: "1-4 mcg/kg/hr", category: "infusion" },
    { name: "Fentanyl (High)", dose: 4, frequency: "mcg/kg/hr", formula: "1-4 mcg/kg/hr", category: "infusion" },
    { name: "Morphine (Low)", dose: 10, frequency: "mcg/kg/hr", formula: "10-60 mcg/kg/hr", category: "infusion" },
    { name: "Morphine (High)", dose: 60, frequency: "mcg/kg/hr", formula: "10-60 mcg/kg/hr", category: "infusion" },
    { name: "Aminophylline", dose: 1, frequency: "mg/kg/hr", formula: "1mg/kg/hr continuous", category: "infusion" },
    { name: "Heparin (Low)", dose: 10, frequency: "unit/kg/hr", formula: "10-40 unit/kg/hr", category: "infusion" },
    { name: "Heparin (High)", dose: 40, frequency: "unit/kg/hr", formula: "10-40 unit/kg/hr", category: "infusion" },
    { name: "Furosemide", dose: 0.3, frequency: "mg/kg/hr", formula: "0.3-1 mg/kg/hr", category: "infusion" }
  ],

  miscellaneous: [
    { name: "Midazolam", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg IV", category: "sedation" },
    { name: "Atracurium", dose: 0.5, frequency: "mg/kg/dose", formula: "0.5mg/kg IV", category: "paralysis" },
    { name: "Diphenhydramine", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IM/IV", category: "antihistamine" },
    { name: "Hydrocortisone (Stat)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg IV", category: "steroid" },
    { name: "Hydrocortisone (Maintenance)", dose: 5, frequency: "mg/kg/dose", formula: "5mg/kg 6 hourly", category: "steroid" },
    { name: "Dexamethasone (Anti-inflammatory)", dose: 0.3, frequency: "mg/kg/dose", formula: "0.3mg/kg", category: "steroid" },
    { name: "Dexamethasone Airway Edema (Min)", dose: 0.125, frequency: "mg/kg/dose", formula: "0.5mg/kg/dose divided in 4", category: "steroid" },
    { name: "Dexamethasone Airway Edema (Max)", dose: 0.5, frequency: "mg/kg/dose", formula: "2mg/kg/dose divided in 4", category: "steroid" },
    { name: "Furosemide", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV", category: "diuretic" },
    { name: "Calcium Chloride", dose: 0.2, frequency: "ml/kg/dose", formula: "0.2ml/kg IV", category: "electrolyte" },
    { name: "Calcium Gluconate", dose: 1, frequency: "ml/kg/dose", formula: "1ml/kg IV", category: "electrolyte" },
    { name: "Potassium Chloride", dose: 2, frequency: "mEq/kg/day", formula: "2mEq/kg/day", category: "electrolyte" },
    { name: "Ranitidine", dose: 2, frequency: "mg/kg/dose", formula: "2mg/kg BD", category: "GI" },
    { name: "Diclofenac", dose: 0.75, frequency: "mg/kg/dose", formula: "0.75mg/kg IM", category: "analgesic" },
    { name: "Vitamin K", dose: 0.5, frequency: "mg/kg/dose", formula: "0.5mg/kg IM", category: "vitamin" }
  ],

  bloodProducts: [
    { name: "Platelets", dose: 5, frequency: "ml/kg/dose", formula: "5-10ml/kg raises count 50-100×10⁹/L", category: "blood" },
    { name: "PRBC", dose: 10, frequency: "ml/kg/dose", formula: "10ml/kg raises Hb by 1g/dL", category: "blood" },
    { name: "Fresh Frozen Plasma", dose: 10, frequency: "ml/kg/dose", formula: "10-15ml/kg for coagulopathy", category: "blood" }
  ],

  syrups: [
    { name: "Amoxicillin Syrup", dosage: "50mg/kg/day", formulation: "125mg/5ml", frequency: "BD/TDS", max: "1g/day", category: "syrup" },
    { name: "Amoxiclav Syrup", dosage: "30-50mg/kg/day", formulation: "156mg/5ml", frequency: "BD/TDS", category: "syrup" },
    { name: "Azithromycin Syrup", dosage: "12-15mg/kg/day", formulation: "200mg/5ml", frequency: "OD", category: "syrup" },
    { name: "Metronidazole Syrup", dosage: "20-30mg/kg/day", formulation: "100mg/5ml", frequency: "BD/TDS", category: "syrup" },
    { name: "Cotrimoxazole Syrup", dosage: "50-60mg/kg/day", formulation: "200/40mg/5ml", frequency: "BD", category: "syrup" },
    { name: "Cephalexin Syrup", dosage: "25-50mg/kg/day", formulation: "125mg/5ml", frequency: "BD", category: "syrup" }
  ]
};

// Helper functions for dose calculations
const doseCalculator = {
  calculateDose: function(medication, weight) {
    // Check for valid inputs
    if (!medication) {
      console.warn('No medication provided to calculateDose');
      return null;
    }
    
    if (!weight || isNaN(weight) || weight <= 0) {
      console.warn('Invalid weight provided to calculateDose:', weight);
      return null;
    }
    
    // For medications without dose (like formulas or instructions)
    if (typeof medication.dose === 'undefined' || medication.dose === null) {
      return {
        value: 0,
        unit: medication.frequency || '',
        formula: medication.formula || 'See instructions',
        name: medication.name
      };
    }
    
    const calculatedDose = medication.dose * weight;
    
    // Apply special rules for certain medications
    if (medication.special) {
      return this.applySpecialRules(medication, calculatedDose, weight);
    }
    
    return {
      value: calculatedDose,
      unit: medication.frequency || '',
      formula: medication.formula || '',
      name: medication.name
    };
  },

  applySpecialRules: function(medication, dose, weight) {
    // Example: Atropine minimum dose
    if (medication.special === "min_dose_0.1mg" && dose < 0.1) {
      return {
        value: 0.1,
        unit: medication.frequency || '',
        formula: medication.formula + " (Minimum dose applied)",
        name: medication.name
      };
    }
    
    // Example: Atropine maximum dose
    if (medication.special === "max_dose_0.5mg" && dose > 0.5) {
      return {
        value: 0.5,
        unit: medication.frequency || '',
        formula: medication.formula + " (Maximum dose applied)",
        name: medication.name
      };
    }
    
    return {
      value: dose,
      unit: medication.frequency || '',
      formula: medication.formula || '',
      name: medication.name
    };
  },

  formatDose: function(dose) {
    if (dose === 0) {
      return 'N/A';
    }
    
    if (dose >= 1000000) {
      return (dose / 1000000).toFixed(1) + "M";
    } else if (dose >= 1000) {
      return (dose / 1000).toFixed(1) + "K";
    } else if (dose < 1) {
      return dose.toFixed(3);
    } else {
      return dose.toFixed(1);
    }
  }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { medicationDatabase, doseCalculator };
}
