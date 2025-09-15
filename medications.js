// Comprehensive pediatric medication database with structured schema
const medicationDatabase = {
  dehydrationPlan: [
    { name: "Plan A (Rehydration)", dose: 50, frequency: "ml/kg", formula: "Given orally over 4 hours", category: "fluid" },
    { name: "Plan B (Moderate)", dose: 100, frequency: "ml/kg", formula: "Given over 4 hours", category: "fluid" },
    { name: "Plan C (Severe - 30% fluid)", dose: 30, frequency: "ml/kg", formula: "IV: 30% over 30 min (child) / 1 h (infant)", category: "fluid" },
    { name: "Plan C (Severe - 70% fluid)", dose: 70, frequency: "ml/kg", formula: "IV: 70% over 5 hrs (infant) / 2.5 hrs (child)", category: "fluid" }
  ],

  fluidRates: [
    { name: "Fluid Bolus (10ml/kg)", dose: 10, frequency: "ml/kg", formula: "Given as bolus over 30-60 min", category: "fluid" },
    { name: "Fluid Bolus (20ml/kg)", dose: 20, frequency: "ml/kg", formula: "Given as bolus over 30-60 min", category: "fluid" },
    { name: "Maintenance Fluid (1 hour)", dose: 4, frequency: "ml/kg/hr", formula: "Continuous infusion (100 ml/kg/day)", category: "fluid" },
    { name: "Maintenance Fluid (8 hours)", dose: 32, frequency: "ml/kg", formula: "Given over 8 hours", category: "fluid" },
    { name: "Maintenance Fluid (24 hours)", dose: 96, frequency: "ml/kg", formula: "Given over 24 hours", category: "fluid" }
  ],

  antibiotics: [
    { name: "Ampicillin (IV, non-meningitis)", dose: 25, frequency: "mg/kg/dose", formula: "25-50mg/kg/dose q6-12h (100-150mg/kg/day neonates; 80-100mg/kg/day children)", category: "antibiotic" },
    { name: "Ampicillin (IV, meningitis)", dose: 75, frequency: "mg/kg/dose", formula: "75-100mg/kg/dose q6h (meningitis dosing)", category: "antibiotic" },
    { name: "Benzylpenicillin (Pen G IV)", dose: 50, frequency: "units/kg/dose", formula: "50,000U/kg/dose q8-12h (for neonatal sepsis); up to 125,000-150,000U/kg q6-8h for meningitis", category: "antibiotic" },
    { name: "Amoxicillin", dose: 25, frequency: "mg/kg/dose", formula: "25-45mg/kg/dose q12h (80-100mg/kg/day) for pneumonia/otitis:contentReference[oaicite:17]{index=17}", category: "antibiotic" },
    { name: "Amoxicillin/Clavulanate (Augmentin)", dose: 25, frequency: "mg/kg/dose", formula: "25-45mg/kg (amoxicillin component) q12h", category: "antibiotic" },
    { name: "Cefazolin", dose: 25, frequency: "mg/kg/dose", formula: "25-50mg/kg/dose q8-12h (infection coverage)", category: "antibiotic" },
    { name: "Ceftriaxone (Empiric)", dose: 50, frequency: "mg/kg/dose", formula: "50-100mg/kg/dose IV q24h (max 2g)", category: "antibiotic", maxPerDose: 2000 },
    { name: "Ceftriaxone (Meningitic)", dose: 100, frequency: "mg/kg/dose", formula: "100mg/kg/dose IV q24h (max 2g) for meningitis", category: "antibiotic", maxPerDose: 2000 },
    { name: "Cefotaxime", dose: 50, frequency: "mg/kg/dose", formula: "50-100mg/kg/dose IV q8h (max 2g)", category: "antibiotic", maxPerDose: 2000 },
    { name: "Ceftazidime", dose: 100, frequency: "mg/kg/dose", formula: "90-150mg/kg/dose IV q8h", category: "antibiotic" },
    { name: "Cefixime", dose: 8, frequency: "mg/kg/dose", formula: "8-10mg/kg/dose PO q12h", category: "antibiotic" },
    { name: "Cefalexin", dose: 25, frequency: "mg/kg/dose", formula: "25-50mg/kg/day PO divided q6-12h:contentReference[oaicite:18]{index=18}", category: "antibiotic" },
    { name: "Vancomycin (Empiric)", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/dose IV q12h (max 1g):contentReference[oaicite:19]{index=19}", category: "antibiotic", maxPerDose: 1000 },
    { name: "Vancomycin (Meningitic)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV q12h (max 1g)", category: "antibiotic", maxPerDose: 1000 },
    { name: "Ciprofloxacin", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV/PO q12h (total 40-60mg/kg/day)", category: "antibiotic" },
    { name: "Meropenem", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV q8h", category: "antibiotic" },
    { name: "Imipenem", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV q8h", category: "antibiotic" },
    { name: "Piperacillin/Tazobactam (per piperacillin)", dose: 100, frequency: "mg/kg/dose", formula: "100mg/kg piperacillin (112.5mg/kg pip-tazo) IV q8h:contentReference[oaicite:20]{index=20}", category: "antibiotic" },
    { name: "Clindamycin", dose: 10, frequency: "mg/kg/dose", formula: "10-20mg/kg/dose IV/PO q6-8h (20-40mg/kg/day):contentReference[oaicite:21]{index=21}", category: "antibiotic" },
    { name: "Linezolid", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose IV/PO q12h", category: "antibiotic" },
    { name: "Co-trimoxazole (Septrin)", dose: 40, frequency: "mg/kg/day", formula: "40mg/kg/day (SMX component) divided q8-12h", category: "antibiotic" },
    { name: "Metronidazole (Flagyl)", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5-15mg/kg/dose IV/PO q8h", category: "antibiotic" },
    { name: "Azithromycin", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose IV/PO q24h (max 500mg)", category: "antibiotic" },
    { name: "Clarithromycin", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/day PO divided q12h", category: "antibiotic" },
    { name: "Gentamicin", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5mg/kg/dose IV q24h (max 160mg)", category: "antibiotic" },
    { name: "Amikacin", dose: 15, frequency: "mg/kg/dose", formula: "15-22.5mg/kg/day IV divided q24h (7.5mg/kg q12h)", category: "antibiotic" },
    { name: "Targocid (Teicoplanin)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg q12h for first 3 doses, then 5mg/kg OD", category: "antibiotic" },
    { name: "Colistin (Min)", dose: 25000, frequency: "IU/kg/dose", formula: "75,000 IU/kg/day (divided TDS)", category: "antibiotic" },
    { name: "Colistin (Max)", dose: 50000, frequency: "IU/kg/dose", formula: "150,000 IU/kg/day (divided TDS)", category: "antibiotic" },
    { name: "Acyclovir (Empirical)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose IV q8h", category: "antiviral" },
    { name: "Acyclovir (Encephalitis)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV q8h", category: "antiviral" },
    { name: "Artemether (Stat)", dose: 3.6, frequency: "mg/kg/dose", formula: "3.6mg/kg IM once", category: "antimalarial" },
    { name: "Artemether (Maintenance)", dose: 1.6, frequency: "mg/kg/dose", formula: "1.6mg/kg IM OD", category: "antimalarial" },
    { name: "Rifampicin (Min)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose OD", category: "anti-TB" },
    { name: "Rifampicin (Max)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose OD", category: "anti-TB" },
    { name: "Isoniazid (Min)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose OD", category: "anti-TB" },
    { name: "Isoniazid (Max)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose OD", category: "anti-TB" },
    { name: "Pyrazinamide (Min)", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose OD", category: "anti-TB" },
    { name: "Pyrazinamide (Max)", dose: 35, frequency: "mg/kg/dose", formula: "35mg/kg/dose OD", category: "anti-TB" },
    { name: "Ethambutol (Min)", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/dose OD", category: "anti-TB" },
    { name: "Ethambutol (Max)", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose OD", category: "anti-TB" }
  ],

  antiemetics: [
    { name: "Ondansetron", dose: 0.15, frequency: "mg/kg/dose", formula: "0.15mg/kg IV/PO q8–12h (max 8mg):contentReference[oaicite:22]{index=22}", category: "antiemetic", maxPerDose: 8, ageMinMonths: 6 },
    { name: "Domperidone", dose: 0.25, frequency: "mg/kg/dose", formula: "0.2–0.3mg/kg PO q8h", category: "antiemetic", maxPerDose: 10, ageMinMonths: 12 },
    { name: "Metoclopramide", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg IV/PO q8h", category: "antiemetic", maxPerDose: 10, ageMinYears: 1 },
    { name: "Promethazine", dose: 0.25, frequency: "mg/kg/dose", formula: "0.25mg/kg PO q6h PRN (age ≥2yr)", category: "antiemetic", maxPerDose: 25 },
    { name: "Prochlorperazine", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg PO/IV q6h PRN (age ≥2yr)", category: "antiemetic", maxPerDose: 5 }
  ],

  resuscitation: [
    { name: "Atropine (Min)", dose: 0.01, frequency: "mg/kg/dose", formula: "0.01mg/kg IV (min 0.1mg):contentReference[oaicite:23]{index=23}", category: "resuscitation", special: "min_dose_0.1mg" },
    { name: "Atropine (Max)", dose: 0.03, frequency: "mg/kg/dose", formula: "0.03mg/kg IV (max 0.5mg)", category: "resuscitation", special: "max_dose_0.5mg" },
    { name: "Bicarbonate", dose: 1, frequency: "mEq/kg/dose", formula: "1-2mEq/kg IV (if metabolic acidosis)", category: "resuscitation" },
    { name: "Calcium Chloride", dose: 0.1, frequency: "ml/kg/dose", formula: "0.1-0.3ml/kg IV (10% soln) for hyperK/CCB OD", category: "resuscitation" },
    { name: "Calcium Gluconate", dose: 0.5, frequency: "ml/kg/dose", formula: "0.5-1ml/kg IV (10% soln)", category: "resuscitation" },
    { name: "Dextrose", dose: 0.5, frequency: "g/kg/dose", formula: "0.5-1g/kg IV (e.g. 10-25% dextrose)", category: "resuscitation" },
    { name: "Epinephrine (1:10,000)", dose: 10, frequency: "mcg/kg/dose", formula: "10mcg/kg IV every 3-5min (1:10,000)", category: "resuscitation" },
    { name: "Lidocaine", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV for VF/VT", category: "resuscitation" },
    { name: "Amiodarone", dose: 5, frequency: "mg/kg/dose", formula: "5mg/kg IV bolus for VF/VT (repeat up to 15mg/kg)", category: "resuscitation" },
    { name: "Naloxone", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg IV (max 2mg) for opioid OD", category: "resuscitation" },
    { name: "Flumazenil", dose: 0.01, frequency: "mg/kg/dose", formula: "0.01mg/kg IV (max 0.2mg) for benzo OD", category: "resuscitation" },
    { name: "Tranexamic Acid", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg IV (max 1g) over 10min (trauma/bleeding)", category: "resuscitation" }
  ],

  cardioversion: [
    { name: "Atrial Arrhythmias (Min)", dose: 0.5, frequency: "joule/kg", formula: "0.5 J/kg synchronized", category: "cardioversion" },
    { name: "Atrial Arrhythmias (Max)", dose: 1, frequency: "joule/kg", formula: "1 J/kg synchronized", category: "cardioversion" },
    { name: "Ventricular Fibrillation", dose: 2, frequency: "joule/kg", formula: "2 J/kg synchronized", category: "cardioversion" },
    { name: "Ventricular Tachycardia (Min)", dose: 1, frequency: "joule/kg", formula: "1 J/kg synchronized", category: "cardioversion" },
    { name: "Ventricular Tachycardia (Max)", dose: 2, frequency: "joule/kg", formula: "2 J/kg synchronized", category: "cardioversion" },
    { name: "Adenosine", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg rapid IV push (max 6mg) for SVT", category: "cardioversion" }
  ],

  antiepileptics: [
    { name: "Levetiracetam (Loading)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV loading over 30-60min", category: "antiepileptic" },
    { name: "Levetiracetam (Maintenance)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose IV/PO q12h", category: "antiepileptic" },
    { name: "Valproate (Loading)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV loading over 30-60min", category: "antiepileptic" },
    { name: "Valproate (Maintenance)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg IV/PO q12h", category: "antiepileptic" },
    { name: "Phenytoin", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV loading (slow over 30-60min)", category: "antiepileptic" },
    { name: "Phenobarbitone", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg IV for refractory seizures", category: "antiepileptic" },
    { name: "Mannitol (Stat)", dose: 1, frequency: "g/kg/dose", formula: "1g/kg IV over 30-60min for raised ICP", category: "antiepileptic" }
  ],

  inhalationTherapy: [
    { name: "Salbutamol Nebulization", frequency: "mg/dose", category: "respiratory", ageBands: [
        { label: "<1 year", minMonths: 0, maxMonths: 11, fixedDose: 1.25, unit: "mg", note: "Nebulize 1.25mg (in 2–3ml NS), q20min ×3, then q4–6h PRN" },
        { label: "≥1 year", minMonths: 12, fixedDose: 2.5, unit: "mg", note: "Nebulize 2.5mg (in 2–3ml NS), q20min ×3, then q4–6h PRN" }
      ]
    },
    { name: "Ipratropium Bromide Neb", frequency: "mcg/dose", category: "respiratory", ageBands: [
        { label: "<12 years", minMonths: 0, maxMonths: 143, fixedDose: 250, unit: "mcg", note: "250mcg via nebulizer q20min ×3 in moderate–severe wheeze" },
        { label: "≥12 years", minMonths: 144, fixedDose: 500, unit: "mcg", note: "500mcg via nebulizer q20min ×3" }
      ]
    },
    { name: "Adrenaline Neb (Croup)", frequency: "ml/dose", category: "respiratory", ageBands: [
        { label: "All ages", fixedDose: 5, unit: "ml of 1:1000 (5mg)", note: "5ml of 1:1000 nebulized, repeat after 20–30min if needed" }
      ]
    }
  ],

  infusions: [
    { name: "Dopamine", dose: 5, frequency: "mcg/kg/min", formula: "5-20mcg/kg/min continuous IV", category: "infusion" },
    { name: "Adrenaline (Low)", dose: 0.05, frequency: "mcg/kg/min", formula: "0.05-0.3mcg/kg/min IV", category: "infusion" },
    { name: "Adrenaline (High)", dose: 0.3, frequency: "mcg/kg/min", formula: "0.3mcg/kg/min IV", category: "infusion" },
    { name: "Noradrenaline (Low)", dose: 0.05, frequency: "mcg/kg/min", formula: "0.05-0.5mcg/kg/min IV", category: "infusion" },
    { name: "Noradrenaline (High)", dose: 0.5, frequency: "mcg/kg/min", formula: "0.5mcg/kg/min IV", category: "infusion" },
    { name: "Dobutamine", dose: 5, frequency: "mcg/kg/min", formula: "5-20mcg/kg/min IV", category: "infusion" },
    { name: "Fentanyl (Infusion)", dose: 1, frequency: "mcg/kg/hr", formula: "1-4mcg/kg/hr IV", category: "analgesic" },
    { name: "Morphine (Infusion)", dose: 10, frequency: "mcg/kg/hr", formula: "10-60mcg/kg/hr IV", category: "analgesic" },
    { name: "Heparin (Low)", dose: 10, frequency: "unit/kg/hr", formula: "10-40 unit/kg/hr IV for anticoagulation", category: "infusion" },
    { name: "Heparin (High)", dose: 40, frequency: "unit/kg/hr", formula: "up to 40 unit/kg/hr IV", category: "infusion" },
    { name: "Aminophylline", dose: 1, frequency: "mg/kg/hr", formula: "1mg/kg/hr IV for asthma/COPD", category: "infusion" },
    { name: "Furosemide", dose: 0.3, frequency: "mg/kg/hr", formula: "0.3-1mg/kg/hr IV for fluid overload", category: "infusion" }
  ],

  miscellaneous: [
    { name: "Midazolam", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1mg/kg IV (sedation)", category: "sedation" },
    { name: "Ketamine", dose: 1, frequency: "mg/kg/dose", formula: "1-2mg/kg IV (procedural sedation)", category: "sedation" },
    { name: "Propofol", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV bolus (titrate) for sedation", category: "sedation" },
    { name: "Atracurium", dose: 0.5, frequency: "mg/kg/dose", formula: "0.5mg/kg IV (paralysis)", category: "paralysis" },
    { name: "Diphenhydramine", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV/IM (allergic reactions)", category: "antihistamine" },
    { name: "Hydrocortisone (Stat)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg IV (for adrenal crisis/anaphylaxis)", category: "steroid" },
    { name: "Hydrocortisone (Maintenance)", dose: 5, frequency: "mg/kg/dose", formula: "5mg/kg IV q6h (adrenal insufficiency)", category: "steroid" },
    { name: "Dexamethasone (Anti-inflammatory)", dose: 0.3, frequency: "mg/kg/dose", formula: "0.3mg/kg IV/PO (single dose)", category: "steroid" },
    { name: "Dexamethasone (Airway edema)", dose: 0.15, frequency: "mg/kg/dose", formula: "0.15-0.6mg/kg IV/IM once", category: "steroid" },
    { name: "Furosemide (IM/IV)", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV/IM (pulmonary edema)", category: "diuretic" },
    { name: "Sodium Chloride 3%", dose: 2, frequency: "ml/kg/dose", formula: "3-5ml/kg IV (max 100ml) for hyponatremic seizure", category: "electrolyte" },
    { name: "Calcium Gluconate", dose: 1, frequency: "ml/kg/dose", formula: "1ml/kg IV (10% solution) for hypocalcemia", category: "electrolyte" },
    { name: "Potassium Chloride", dose: 2, frequency: "mEq/kg/day", formula: "2mEq/kg/day PO/IV (max 60mEq/day)", category: "electrolyte" },
    { name: "Ranitidine", dose: 2, frequency: "mg/kg/dose", formula: "2mg/kg IV/PO q12h", category: "GI" },
    { name: "Omeprazole", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg IV/PO q12h (max 40mg/day)", category: "GI" },
    { name: "Vitamin K", dose: 0.5, frequency: "mg/kg/dose", formula: "0.5-1mg/kg IV/IM (max 10mg) for coagulopathy", category: "vitamin" },
    { name: "Paracetamol (Acetaminophen)", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg PO/PR/IV q6h (max 60mg/kg/day, max 4g)", category: "analgesic", maxPerDose: 1000 },
    { name: "Ibuprofen", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg PO q6-8h (max 40mg/kg/day, max 1200mg)", category: "analgesic", maxPerDose: 400 },
    { name: "Ibuprofen Syrup", dosage: "10mg/kg/dose", formulation: "100mg/5ml", frequency: "q6-8h PRN (max 40mg/kg/day)", category: "syrup", ageMinMonths: 3 },
    { name: "Paracetamol Syrup", dosage: "15mg/kg/dose", formulation: "100mg/5ml", frequency: "q6h PRN (max 60mg/kg/day)", category: "syrup", ageMinMonths: 0 },
    { name: "Cetirizine Syrup", dosage: "0.25mg/kg/day", formulation: "5mg/5ml", frequency: "OD", category: "syrup", ageMinMonths: 6 },
    { name: "Montelukast (Chewable)", formulation: "4mg/5mg/10mg", frequency: "OD", category: "syrup", ageBands: [
        { label: "2–5 years", minMonths: 24, maxMonths: 71, fixedDose: 4, unit: "mg", note: "Once daily at night" },
        { label: "6–14 years", minMonths: 72, maxMonths: 179, fixedDose: 5, unit: "mg", note: "Once daily at night" },
        { label: "≥15 years", minMonths: 180, fixedDose: 10, unit: "mg", note: "Once daily at night" }
      ]
    }
  ],

  antidiarrheals: [
    { name: "ORS (Low-osmolar)", dose: 75, frequency: "ml/kg", formula: "75ml/kg over 4h plus ongoing losses", category: "antidiarrheal" },
    { name: "Zinc Sulfate", dose: 10, frequency: "mg/day", formula: "10mg daily for 14 days (<6mo); 20mg daily for 14 days (≥6mo)", category: "antidiarrheal", ageBands: [
        { label: "<6 months", minMonths: 0, maxMonths: 5, fixedDose: 10, unit: "mg/day", duration: "10–14 days" },
        { label: "≥6 months", minMonths: 6, fixedDose: 20, unit: "mg/day", duration: "10–14 days" }
      ]
    },
    { name: "Racecadotril", dose: 1.5, frequency: "mg/kg/dose", formula: "1.5mg/kg PO q8h (max 100mg/dose) for up to 7 days", category: "antidiarrheal", ageMinMonths: 3 }
  ],

  protocols: [
    { name: "Fever (Paracetamol)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 15, unit: "mg/kg", note: "q6h PRN (max 60mg/kg/day)", duration: "48–72h then review" }
      ]
    },
    { name: "Bronchiolitis O2 target", frequency: "%", category: "protocol", ageBands: [
        { label: "<12 months", minMonths: 0, maxMonths: 11, fixedDose: 92, unit: "%SpO2", note: "Maintain ≥92%; consider NG/IV fluids" }
      ]
    },
    { name: "Pain Step 1 (Paracetamol)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 15, unit: "mg/kg", note: "q6h PRN (max 60mg/kg/day; 4g/day)", duration: "24–72h then review" }
      ]
    },
    { name: "Pain Step 2 (Ibuprofen)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "≥6 months", minMonths: 6, dosePerKg: 10, unit: "mg/kg", note: "q6-8h PRN (max 40mg/kg/day)", duration: "24–72h then review" }
      ]
    },
    { name: "Pain Step 3 (Morphine)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 0.1, unit: "mg/kg", note: "IV slow bolus; titrate and monitor RR/SpO₂", duration: "As needed" }
      ]
    },
    { name: "Croup: Dexamethasone", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 0.15, unit: "mg/kg", note: "PO/IM/IV; single dose (0.15–0.6mg/kg acceptable); may repeat once after 12–24h", duration: "Single dose" }
      ]
    },
    { name: "Croup: Neb Adrenaline", frequency: "mg/dose", category: "protocol", ageBands: [
        { label: "All ages", fixedDose: 5, unit: "ml of 1:1000", note: "5ml (5mg) nebulized; observe rebound; repeat q20-30min if needed", duration: "May repeat after 20–30min" }
      ]
    },
    { name: "Asthma: Salbutamol Neb", frequency: "mg/dose", category: "protocol", ageBands: [
        { label: "<1 year", minMonths: 0, maxMonths: 11, fixedDose: 1.25, unit: "mg", note: "Nebulize 1.25mg q20min ×3, then q4–6h PRN" },
        { label: "≥1 year", minMonths: 12, fixedDose: 2.5, unit: "mg", note: "Nebulize 2.5mg q20min ×3, then q4–6h PRN" }
      ]
    },
    { name: "Asthma: Ipratropium", frequency: "mcg/dose", category: "protocol", ageBands: [
        { label: "<12 years", minMonths: 0, maxMonths: 143, fixedDose: 250, unit: "mcg", note: "Neb 250mcg q20min ×3 (moderate–severe)", },
        { label: "≥12 years", minMonths: 144, fixedDose: 500, unit: "mcg", note: "Neb 500mcg q20min ×3", }
      ]
    },
    { name: "Asthma: Steroid (Prednisolone)", frequency: "mg/kg/day", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 1, unit: "mg/kg/day", note: "PO OD–BD (max 40–60mg/day) for 3–5 days", }
      ]
    },
    { name: "Sedation Step 1 (Midazolam)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "IV", dosePerKg: 0.05, unit: "mg/kg", note: "Titrate 0.05–0.1mg/kg IV; monitor", }
      ]
    },
    { name: "Sedation Step 2 (Ketamine)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "IV", dosePerKg: 1, unit: "mg/kg", note: "1–2mg/kg IV; airway-ready", duration: "Single procedural dose" },
        { label: "IM", dosePerKg: 4, unit: "mg/kg", note: "4–5mg/kg IM", }
      ]
    },
    { name: "Sedation Step 3 (Propofol)", frequency: "mg/kg/dose", category: "protocol", ageBands: [
        { label: "All ages", dosePerKg: 1, unit: "mg/kg", note: "Titrate 1mg/kg IV bolus; monitor BP", }
      ]
    }
  ],

  bloodProducts: [
    { name: "Platelets", dose: 5, frequency: "ml/kg/dose", formula: "5-10ml/kg transfused (raises plt by ~50-100x10^9/L)", category: "blood" },
    { name: "Packed RBC (PRBC)", dose: 10, frequency: "ml/kg/dose", formula: "10ml/kg transfused (raises Hb by ~1g/dL)", category: "blood" },
    { name: "Fresh Frozen Plasma (FFP)", dose: 10, frequency: "ml/kg/dose", formula: "10-15ml/kg transfused for coagulopathy", category: "blood" },
    { name: "Cryoprecipitate", dose: 1, frequency: "unit/10kg", formula: "1 unit per 10kg for fibrinogen replacement", category: "blood" }
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

