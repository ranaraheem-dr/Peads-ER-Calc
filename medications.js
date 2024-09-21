const dehydrationPlan = [
  { name : "Plan A (Rehydration)", dose: 50, frequency: "ml/kg", formula: "Given orally over 4 hours" },
  { name : "Plan B (Moderate)", dose: 100, frequency: "ml/kg", formula: "Given over 4 hours" },
  { name : "Plan C (Severe - 30% fluid)", dose: 30, frequency: "ml/kg", formula: "<span class='centered-text'>Over 30 minsin child and 1 hr in infant</span>" },
  { name : "Plan C (Severe - 70% fluid)", dose: 70, frequency: "ml/kg", formula: "<span class='centered-text'>Over 5 hrs in infant and 2.5 hrs in child</span>" },
 ];
 
const fluidRates = [
  { name : "Fluid Bolus (10ml/kg)", dose: 10, frequency: "ml/kg", formula: "Given as bolus over 30-60 min" },
  { name : "Fluid Bolus (20ml/kg)", dose: 20, frequency: "ml/kg", formula: "Given as bolus over 30-60 min" },
  { name : "Maintenance Fluid (1 hour)", dose: 4, frequency: "ml/kg/hr", formula: "Given as continuous infusion" },
  { name : "Maintenance Fluid (8 hours)", dose: 32, frequency: "ml/kg", formula: "Given over 8 hours" },
  { name : "Maintenance Fluid (24 hours)", dose: 96, frequency: "ml/kg", formula: "Given over 24 hours" },
 ];
 
const antibiotics = [
  { name : "Augmentin", dose: 30, frequency: "TDS", formula: "30mg/kg/dose" },
  { name : "Amikacin", dose: 15, frequency: "BD", formula: "15-22.5mg/kg/24 hrs or 7.5mg/kg/dose" },
  { name : "Tanzo", dose: 90, frequency: "TDS", formula: "90mg/kg/d" },
  { name : "Vancomycin - Empirical", dose: 15, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
  { name : "Vancomycin - Meningitic", dose: 20, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
  { name : "Ceftriaxone - Empirical", dose: 50, frequency: "mg/kg/dose", formula: "50mg/kg/dose" },
  { name : "Ceftriaxone - Enteric", dose: 75, frequency: "mg/kg/dose", formula: "75mg/kg/dose" },
  { name : "Ceftriaxone - Meningitic", dose: 100, frequency: "mg/kg/dose", formula: "100mg/kg/dose" },
  { name : "Ciprofloxacin", dose: 20, frequency: "mg/kg/dose", formula: "20-30mg/kg/24hrs" },
  { name : "Meronum", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose" },
  { name : "Imepenum", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose" },
  { name : "Linezolid", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
  { name : "Sulzone", dose: 40, frequency: "mg/kg/dose", formula: "40-60mg/kg/day" },
  { name : "Targocid", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg BD for first 3 doses, then 5mg/kg OD" },
  { name : "Collistin min", dose: 25_000, frequency: "IU/kg/dose", formula: "75,000IU/kg/day calc dose is divided into tds"},
  { name : "Collistin max", dose: 50_000, frequency: "IU/kg/dose", formula: "150,000IU/kg/day calc dose is divided into tds" },
  { name : "Flagyl ml", dose: 1.5, frequency: "ml/kg/dose", formula: "1.5ml/kg/dose" },
  { name : "Flagyl mg", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5mg/kg/dose" },
  { name : "Klaricid", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/day" },
  { name : "Levofloxacin", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/day" },
  { name : "Cefixime", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/day" },
  { name : "Cefotaxime", dose: 50, frequency: "mg/kg/dose", formula: "50mg /kg/dose" },
  { name : "Streptomycin Min", dose: 500_000, frequency: "IU/kg/dose", formula: "500000IU/kg/dose" },
  { name : "Streptomycin Max", dose: 1_000_000, frequency: "IU/kg/dose", formula: "1000000IU/kg/dose" },
  { name : "Acyclovir (Empirical)", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/TDS" },
  { name : "Acyclovir (Encephalitis)", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/TDS" },
  { name : "Artemether stat", dose: 3.6, frequency: "mg/kg/dose", formula: "3.6mg/kg/dose IM" },
  { name : "Artemether ", dose: 1.6, frequency: "mg/kg/dose", formula: "1.6mg/kg/OD IM" },
  { name : "Nilstat drops ", dose: 0.1, frequency: "ml/kg/dose", formula: "0.1ml/kg/TDS PO, 1 drop is 1ml" },
  { name : "Rifampicin min", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
  { name : "Rifampicin max", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose" },
  { name : "Isoniazid min", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
  { name : "Isoniazid max", dose: 20, frequency: "mg/kg/dose", formula: "20mg/kg/dose" },
  { name : "Pyrazinamide min", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose" },
  { name : "Pyrazinamide max", dose: 35, frequency: "mg/kg/dose", formula: "35mg/kg/dose" },
  { name : "Ethambutol min", dose: 15, frequency: "mg/kg/dose", formula: "15mg/kg/dose" },
  { name : "Ethambutol max", dose: 25, frequency: "mg/kg/dose", formula: "25mg/kg/dose" },
  { name : "Gentamicin", dose: 7.5, frequency: "mg/kg/dose", formula: "7.5mg/kg/dose" },
 ];

const vasodilators = [
  { name: "GTN", dose: 0.5, frequency: "mcg/kg/min", formula: "Given as continuous infusion" },
  { name: "SNP", dose: 0.5, frequency: "mcg/kg/min", formula: "Given as continuous infusion" },
  ];

const antiarrythmics = [
  { name: "Amiodarone", dose: 5, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  { name: "Lignocaine", dose: 1, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  ];

const miscellaneous = [
 { name : "Dormicum", dose: 0.1, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
 { name : "Atrelax", dose: 0.1, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
 { name : "Avil", dose: 1, frequency: "mg/kg/dose", formula: "10mg/kg/loading" },
 { name : "Provas mg", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose 8hrly" },
 { name : "Provas ml", dose: 1, frequency: "ml/kg/dose", formula: "1ml/kg/dose 8hrly" },
 { name : "Solucortif stat", dose: 10, frequency: "mg/kg/dose", formula: "10mg/kg/dose" },
 { name : "Solucortif Maintenance", dose: 5, frequency: "mg/kg/dose", formula: "5mg/kg/dose 6hrly" },
 { name : "Dexa anti-inflammatory", dose: 0.3, frequency: "mg/kg/dose", formula: "0.3mg/kg/dose" },
 { name : "Dexa airway edema min", dose: 0.125, frequency: "mg/kg/dose", formula: "0.5mg/kg/dose divided in 4 doses" },
 { name : "Dexa airway edema max", dose: 0.5, frequency: "mg/kg/dose", formula: "2mg/kg/dose divided in 4 doses" },
 { name : "Lasix", dose: 1, frequency: "mg/kg/dose", formula: "1mg/kg/dose" },
 { name : "Calcium Chloride", dose: 0.2, frequency: "ml/kg/dose", formula: "0.2ml/kg/dose" },
 { name : "Calcium Gluconate", dose: 1, frequency: "ml/kg/dose", formula: "1ml/kg /dose" },
 { name : "kcl", dose: 2, frequency: "mEq/kg/d", formula: "2 mEq/kg/d" },
 { name : "Ranitidine (Zantac)", dose: 2, frequency: "mg/kg/dose", formula: "2 mg/kg" },
 { name : "Inj. Dicloran", dosage: 0.75, frequency: "mg/kg/dose", formula: "mg/kg/dose IM" },
 { name : "Vitamin-k", dose: 0.5, frequency: "mg/kg/dose", formula: "0.5mg/kg/dose" },
];

const tablets = [
  { name: "Capace", dose: 10, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Inderal", dose: 10, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aldactone", dose: 1.2, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aspirin 1mg", dose: 1, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aspirin 2mg", dose: 2, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aspirin 3mg", dose: 3, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aspirin 4mg", dose: 4, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Aspirin 5mg", dose: 5, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Britanyl 2.5mg", dose: 0.15, frequency: "mg/kg/dose", formula: "Given orally TDS" },
  ];

const resuscitation = [
  { name: "Endotracheal tube size", formula: "4 + Age/4" },
  { name: "Atropine Min", dose: 0.01, frequency: "mg/kg/dose", formula: "0.01 mg/kg" },
  { name: "Atropine Max", dose: 0.03, frequency: "mg/kg/dose", formula: "0.03 mg/kg" },
  { name: "Bicarbonate Min", dose: 1, frequency: "mEq/kg/dose", formula: "1 mEq/kg" },
  { name: "Bicarbonate Max", dose: 2, frequency: "mEq/kg/dose", formula: "2 mEq/kg" },
  { name: "Calcium Chloride Min", dose: 0.1, frequency: "ml/kg/dose", formula: "0.1 ml/kg" },
  { name: "Calcium Chloride Max", dose: 0.3, frequency: "ml/kg/dose", formula: "0.3 ml/kg" },
  { name: "Calcium Gluconate Min", dose: 0.6, frequency: "ml/kg/dose", formula: "0.6 ml/kg" },
  { name: "Calcium Gluconate Max", dose: 1, frequency: "ml/kg/dose", formula: "1 ml/kg" },
  { name: "Dextrose", dose: 0.5, frequency: "g/kg/dose", formula: "0.5-1 g/kg IV" }, 
  { name: "Diltiazem (Cardizem)", dose: 0.25, frequency: "mg/kg/dose", formula: "0.25 mg/kg over 2 min" },
  { name: "Ephedrine Min", dose: 0.2, frequency: "mg/kg/dose", formula: "0.2 mg/kg/dose" },
  { name: "Ephedrine Max", dose: 0.3, frequency: "mg/kg/dose", formula: "0.3 mg/kg/dose" },
  { name: "Epinephrine (1:10,000)", dose: 10, frequency: "mcg/kg/dose", formula: "10 mcg/kg" },
  { name: "Digoxin", dose: 0.02, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  { name: "Lidocaine", dose: 1, frequency: "mg/kg/dose", formula: "1 mg/kg" },
  ];

const cardioversion = [
  { name: "Atrial arrhythmias Min", dose: 0.5, frequency: "joule/kg/dose", formula: "0.5 joule/kg" },
  { name: "Atrial arrhythmias Max", dose: 1, frequency: "joule/kg/dose", formula: "1 joule/kg" },
  { name: "Ventricular Fibrillation", dose: 2, frequency: "joule/kg/dose", formula: "2 joules/kg" },
  { name: "Ventricular Tachycardia Min", dose: 1, frequency: "joule/kg/dose", formula: "1 joules/kg" },
  { name: "Ventricular Tachycardia Max", dose: 2, frequency: "joule/kg/dose", formula: "2 joules/kg" },
  { name: "Adenosine", dose: 0.1, frequency: "mg/kg/dose", formula: "0.1 mg/kg" },
  ];

const antiepileptics = [
  { name: "Lerace Loading", dose: 20, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  { name: "Lerace (Min Maintenance)", dose: 20, frequency: "mg/kg/dose", formula: "20 mg/kg BD " },
  { name: "Lerace (Max Maintenance)", dose: 60, frequency: "mg/kg/dose", formula: "60 mg/kg BD" },
  { name: "Epival Loading", dose: 20, frequency: "mg/kg/dose", formula: "20 mg/kg over 30-60 min " },
  { name: "Epival Maintenance", dose: 10, frequency: "mg/kg/dose", formula: "10 mg/kg over 30-60 min " },
  { name: "Phenytoin", dose: 10, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  { name: "Mannitol stat", dose: 10, frequency: "mg/kg/dose", formula: "Given as bolus over 30-60 min" },
  { name: "Mannitol maintenance", dose: 5, frequency: "mg/kg/dose", formula: "Given 6 hourly 5 days" },
  ];

const pulmonaryhtn = [
  { name: "Sildenafil (50,100,125 mg)", dose: 1, frequency: "mg/kg/dose", formula: "Given orally" },
  { name: "Benprost 20mcg", dose: 1, frequency: "mcg/kg/dose", formula: "mcg/kg/dose/TDS" },
  { name: "Bosmon 62.5mcg", dose: 1, frequency: "mcg/kg/dose", formula: "1mcg/kg/dose/BD" },
  ];

const nebs = [
  { name: "Ventolin", dose: 2.5, frequency: "ml/kg/dose", formula: "Nebulised over 15-20 min" },
  { name: "Atem <1 year", dose: 1, frequency: "ml/dose", formula: "Nebulised over 15-20 min" },
  { name: "Atem >1 year", dose: 2.5, frequency: "ml/dose", formula: "Nebulised over 15-20 min" },
  ];

const bronchodilators = [ 
  { name: "Terbutaline loading min" , dose: 2, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" }, 
  { name: "Terbutaline loading max" , dose: 10, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" }, 
  { name: "Terbutaline maintenance min" , dose: 0.2, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" }, 
  { name : "Terbutaline maintenance max" , dose: 0.4, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" },
  { name : "Mgso4 min" , dose: 25, frequency: "mg/kg/dose" , formula: "25mg/kg" }, 
  { name : "Mgso4 max" , dose: 50,frequency: "mg/kg/dose" , formula: "50mg/kg" }, 
 ];

const hypercyanoticspells = [ 
  { name : "Esmolol 100mcg" , dose: 100, frequency: "mcg/kg/dose" , formula: "100-500 mcg/kg over 1 minute" }, 
  { name : "Esmolol 200mcg" , dose: 200, frequency: "mcg/kg/dose" , formula: "100-500 mcg/kg over 1 minute" }, 
  { name : "Esmolol 500mcg" , dose: 500, frequency: "mcg/kg/dose" , formula: "100-500 mcg/kg over 1 minute" }, 
  { name : "Morphine" , dose: 0.1, frequency: "mg/kg/dose" , formula: "0.1 mg/kg IV, IM, SC" }, 
  { name : "Phenylephrine 5mcg" , dose: 5, frequency: "mcg/kg/dose" , formula: "5-20 mcg/kg every 10-15 minutes" }, 
  { name : "Phenylephrine 20mcg" , dose: 20, frequency: "mcg/kg/dose" , formula: "5-20 mcg/kg every 10-15 minutes" }, 
  { name : "Propranolol 0.015" , dose: 0.015, frequency: "mg/kg/dose" , formula: "0.015-0.02 mg/kg IV" }, 
  { name : "Propranolol 0.02" , dose: 0.02, frequency: "mg/kg/dose" , formula: "0.015-0.02 mg/kg IV" }, 
 ];

const syrups = [ 
  { name : "Syp. Amoxil" , dosage: "50mg/kg/day" , formulation: "125mg/5ml" , frequency: "BD/TDS" , max: "1g/day" }, 
  { name : "Syp. Calamox" , dosage: "30-50mg/kg/day" , formulation: "156mg/5ml" , frequency: "BD/TDS" }, 
  { name : "Syp. Azit" , dosage: "12-15mg/kg/day" , formulation: "200mg/5ml" , frequency: "OD" }, 
  { name : "Syp. Flagyl" , dosage: "20-30mg/kg/day" , formulation: "100mg/5ml" , frequency: "BD/TDS" }, 
  { name : "Syp. Septran" , dosage: "50-60mg/kg/day" , formulation: "200/40mg/5ml" , frequency: "BD" }, 
  { name : "Syp. Velosef" , dosage: "25-50mg/kg/day" , formulation: "125mg/5ml" , frequency: "BD" }, 
  { name : "Syp. Nitazide" , dosage: "100mg BD" , formulation: "100mg/5ml" , frequency: "BD" } 
 ];

const reversals = [ 
  { name : "Atropine" , dose: 0.01, frequency: "mg/kg/dose" , formula: "0.01-0.02 mg/kg IV" }, 
  { name : "Edrophonium" , dose: 0.2, frequency: "mg/kg/dose" , formula: "0.2 mg/kg IV" }, 
  { name : "Flumazenil" , dose: 0.01, frequency: "mg/kg/dose" , formula: "0.01 mg/kg IV" },
  { name : "Glycopyrrolate" , dose: 0.005, frequency: "mg/kg/dose" , formula: "0.005-0.01 mg/kg IV" }, 
  { name : "Narcan" , dose: 0.01, frequency: "mg/kg/dose" , formula: "0.01-0.1 mg/kg/dose IV" }, 
  { name : "Neostigmine" , dose: 0.05, frequency: "mg/kg/dose" , formula: "0.05-0.07 mg/kg IV" }, 
  { name : "Physostigmine" , dose: 0.01, frequency: "mg/kg/dose" , formula: "0.01 mg/kg IV" }, 
 ];

const insulin = [ 
  { name : "Insulin" , dose: 0.02, frequency: "U/kg/hr" , formula: "0.02-0.1 U/kg/hr" }, 
 ]; 

const bloodproducts = [
  { name: "Platelets", dose: 5, frequency: "ml/kg/dose", formula: "5-10 ml/kg will raise count 50-100x10^9/L" },
  { name: "PRBC", dose: 10, frequency: "ml/kg/dose", formula: "10 ml/kg will raise Hg by 1 gm" },
  { name: "FFP", dose: 10, frequency: "ml/kg/dose", formula: "10 ml/kg will raise the platelet count by 50,000-100,000/uL" },
  ];

const hyperkalemia = [ 
  { name : "Dextrose" , dose: 0.5, frequency: "g/kg/dose" , formula: "0.5-1 g/kg IV over 15 min" }, 
  { name : "Insulin" , dose: 0.2, frequency: "U/g Dextrose" , formula: "0.2-0.3 U Reg Insulin/g Dextrose" }, 
  { name: "Ca++" , dose: 4, frequency: "mg/kg/dose" , formula: "4-5 mg/kg IV over 5-10 min" }, 
  { name : "Kayexelate" , dose:1, frequency: "gm/kg/dose" , formula: "1-2 gm/kg PO, PR" }, 
 ]; 

const infusions = [ 
  { name : "Dopamine" , dose: 5, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" }, 
  { name : "Adrenaline 0.05mcg" , dose: 0.05, frequency: "mcg/kg/min" , formula: "0.05 mcg/kg/min" }, 
  { name : "Adrenaline 0.1mcg" , dose: 0.1, frequency: "mcg/kg/min" , formula: "0.1 mcg/kg/min" }, 
  { name : "Nor-Adrenaline 0.05mcg" , dose: 0.05, frequency: "mcg/kg/min" , formula: "0.05 mcg/kg/min" }, 
  { name : "Nor-Adrenaline 0.1mcg" , dose: 0.1, frequency: "mcg/kg/min" , formula: "0.1 mcg/kg/min" }, 
  { name : "Fentanyl 1mcg" , dose: 1, frequency: "mcg/kg/hr" , formula: "1 mcg/kg/hr" }, 
  { name : "Fentanyl 4mcg" , dose: 4, frequency: "mcg/kg/hr" , formula: "4 mcg/kg/hr" }, 
  { name : "Lasix 0.3mg" , dose: 0.3, frequency: "mg/kg/hr" , formula: "0.3mg/kg/hr" }, 
  { name : "Lasix 1mg" , dose: 1, frequency: "mg/kg/hr" , formula: "1 mg/kg/hr" }, 
  { name : "Aminophylline" , dose: 1, frequency: "mg/kg/hr" , formula: "1 mg/kg/hr" }, 
  { name : "Heparin 10 unit" , dose: 10, frequency: "unit/kg/hr" , formula: "10 unit/kg/hr" },
  { name : "Heparin 40 unit" , dose: 40, frequency: "unit/kg/hr" , formula: "40 unit/kg/hr" }, 
  { name: "Morphine 10 mcg" , dose: 10, frequency: "mcg/kg/hr" , formula: "10 mcg/kg/hr" }, 
  { name : "Morphine 30 mcg" , dose: 30, frequency: "mcg/kg/hr" , formula: "30 mcg/kg/hr" }, 
  { name : "Morphine 60 mcg" , dose: 60, frequency: "mcg/kg/hr" , formula: "60 mcg/kg/hr" }, 
  { name : "Dobutamine" , dose: 5, frequency: "mcg/kg/min" , formula: "Given as continuous infusion" }, 
  ];
