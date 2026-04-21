const QUESTIONS = [
  {
    "id": "Q1.1",
    "category": "Dental Procedures",
    "question": "During a veterinary dental prophylaxis, what is the correct order of the major procedural steps after the patient is anesthetized and intubated?",
    "answers": [
      {
        "text": "Oral exam → radiographs → gross calculus removal → supragingival scaling → subgingival scaling → polishing → probing/charting → irrigation",
        "correct": true
      },
      {
        "text": "Polishing → scaling → probing → radiographs → irrigation",
        "correct": false
      },
      {
        "text": "Oral exam → scaling → polishing → probing → irrigation → radiographs",
        "correct": false
      },
      {
        "text": "Supragingival scaling → polishing → subgingival scaling → oral exam → radiographs",
        "correct": false
      }
    ],
    "explanation": "Per AVDC and AAHA Dental Care Guidelines, the standard COHAT sequence starts with an oral exam to note obvious pathology, followed by full-mouth intraoral radiographs to identify subgingival disease before treatment begins. Then gross calculus is removed, followed by detailed scaling (supra- then subgingival), polishing to smooth micro-scratches, probing/charting to document pocket depths, and irrigation to flush debris.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.2",
    "category": "Dental Procedures",
    "question": "Why is polishing performed immediately after scaling during a dental prophylaxis?",
    "answers": [
      {
        "text": "To smooth micro-scratches in the enamel left by the scaler, which would otherwise promote rapid plaque re-accumulation",
        "correct": true
      },
      {
        "text": "To apply fluoride treatment to the teeth",
        "correct": false
      },
      {
        "text": "To remove subgingival calculus that the scaler missed",
        "correct": false
      },
      {
        "text": "To sterilize the tooth surface and kill remaining bacteria",
        "correct": false
      }
    ],
    "explanation": "Scaling creates microscopic roughness on the enamel surface. Polishing smooths these scratches so plaque cannot adhere as easily, slowing future calculus formation.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.3",
    "category": "Dental Procedures",
    "question": "In the Modified Triadan numbering system, what does tooth number 409 represent?",
    "answers": [
      {
        "text": "Lower right first molar",
        "correct": true
      },
      {
        "text": "Upper right canine",
        "correct": false
      },
      {
        "text": "Lower left fourth premolar",
        "correct": false
      },
      {
        "text": "Upper left first molar",
        "correct": false
      }
    ],
    "explanation": "In the Modified Triadan system, the first digit represents the quadrant (1=upper right, 2=upper left, 3=lower left, 4=lower right). The second and third digits represent tooth position from the midline. So 409 = quadrant 4 (lower right), tooth position 09 (first molar).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.4",
    "category": "Dental Procedures",
    "question": "A furcation grade of F2 on a dental chart indicates:",
    "answers": [
      {
        "text": "The periodontal probe enters the furcation more than one-third of the tooth width, but does not pass through entirely",
        "correct": true
      },
      {
        "text": "No furcation involvement is present",
        "correct": false
      },
      {
        "text": "The probe just barely enters the furcation (less than one-third of tooth width)",
        "correct": false
      },
      {
        "text": "The probe passes completely through the furcation from one side to the other",
        "correct": false
      }
    ],
    "explanation": "Furcation grading: F0 = no involvement, F1 = probe enters <1/3 width, F2 = probe enters >1/3 width but not through-and-through, F3 = probe passes entirely through. F2 indicates significant but not complete bone loss between the roots.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.5",
    "category": "Dental Procedures",
    "question": "What does a tooth mobility grade of M3 indicate?",
    "answers": [
      {
        "text": "Severe mobility with >1mm horizontal movement AND/OR vertical (depressible) movement",
        "correct": true
      },
      {
        "text": "No detectable movement",
        "correct": false
      },
      {
        "text": "Slight mobility with less than 1mm horizontal movement",
        "correct": false
      },
      {
        "text": "Moderate mobility with >1mm horizontal movement but no vertical movement",
        "correct": false
      }
    ],
    "explanation": "M0 = no movement, M1 = slight (<1mm horizontal), M2 = moderate (>1mm horizontal only), M3 = severe (>1mm horizontal AND/OR vertical movement into the alveolus). M3 teeth often require extraction.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.6",
    "category": "Dental Procedures",
    "question": "An adult dog has how many permanent teeth?",
    "answers": [
      {
        "text": "42",
        "correct": true
      },
      {
        "text": "30",
        "correct": false
      },
      {
        "text": "38",
        "correct": false
      },
      {
        "text": "44",
        "correct": false
      }
    ],
    "explanation": "Adult dogs have 42 permanent teeth: 12 incisors, 4 canines, 16 premolars, and 10 molars. Adult cats, by contrast, have 30 permanent teeth.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.7",
    "category": "Dental Procedures",
    "question": "An adult cat has how many permanent teeth?",
    "answers": [
      {
        "text": "30",
        "correct": true
      },
      {
        "text": "42",
        "correct": false
      },
      {
        "text": "28",
        "correct": false
      },
      {
        "text": "36",
        "correct": false
      }
    ],
    "explanation": "Adult cats have 30 permanent teeth. They are missing upper and lower first premolars and the lower second premolar present in dogs, and have fewer molars.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.8",
    "category": "Dental Procedures",
    "question": "During ultrasonic scaling, what must be continuously applied to the scaler tip to prevent thermal damage to the tooth?",
    "answers": [
      {
        "text": "A constant water spray (lavage)",
        "correct": true
      },
      {
        "text": "Polishing paste",
        "correct": false
      },
      {
        "text": "Chlorhexidine solution only",
        "correct": false
      },
      {
        "text": "Compressed air",
        "correct": false
      }
    ],
    "explanation": "Ultrasonic scalers generate significant heat through vibration. Continuous water lavage is essential to cool the tip and the tooth surface, preventing thermal necrosis of the pulp.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.9",
    "category": "Dental Procedures",
    "question": "Why is a cuffed endotracheal tube particularly important during dental procedures?",
    "answers": [
      {
        "text": "To prevent aspiration of water, blood, debris, and bacteria into the lungs during scaling and irrigation",
        "correct": true
      },
      {
        "text": "To deliver dental anesthetic gas directly to the oral cavity",
        "correct": false
      },
      {
        "text": "To keep the mouth propped open for the procedure",
        "correct": false
      },
      {
        "text": "To monitor end-tidal CO2 during the procedure (though this is a secondary benefit)",
        "correct": false
      }
    ],
    "explanation": "Dental procedures generate large amounts of aerosolized water, calculus debris, blood, and bacteria. A properly inflated cuffed ET tube seals the trachea and prevents aspiration pneumonia.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.10",
    "category": "Dental Procedures",
    "question": "What instrument is used to measure gingival sulcus depth during periodontal probing?",
    "answers": [
      {
        "text": "A graduated periodontal probe (e.g., Williams probe)",
        "correct": true
      },
      {
        "text": "A dental explorer",
        "correct": false
      },
      {
        "text": "A curette",
        "correct": false
      },
      {
        "text": "A dental elevator",
        "correct": false
      }
    ],
    "explanation": "A periodontal probe has millimeter markings along its tip and is gently inserted into the gingival sulcus to measure pocket depth. A normal sulcus is 1-3mm in dogs and 0.5-1mm in cats.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.11",
    "category": "Dental Procedures",
    "question": "Normal gingival sulcus depth in a healthy dog is:",
    "answers": [
      {
        "text": "1–3 mm",
        "correct": true
      },
      {
        "text": "0–0.5 mm",
        "correct": false
      },
      {
        "text": "4–6 mm",
        "correct": false
      },
      {
        "text": "7–9 mm",
        "correct": false
      }
    ],
    "explanation": "Normal canine sulcus depth is 1-3mm. In cats, it is 0.5-1mm. Depths exceeding these ranges indicate periodontal pocketing and disease requiring further evaluation.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.12",
    "category": "Dental Procedures",
    "question": "Which dental instrument is used to loosen the periodontal ligament before tooth extraction?",
    "answers": [
      {
        "text": "Dental elevator (luxator)",
        "correct": true
      },
      {
        "text": "Periodontal probe",
        "correct": false
      },
      {
        "text": "Ultrasonic scaler",
        "correct": false
      },
      {
        "text": "Polishing cup",
        "correct": false
      }
    ],
    "explanation": "Dental elevators and luxators are inserted between the tooth root and alveolar bone to stretch and tear the periodontal ligament, loosening the tooth before extraction with forceps.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.1",
    "category": "Vaccine Administration",
    "question": "When administering a rabies vaccine to a cat, which limb should be used and where?",
    "answers": [
      {
        "text": "Right rear limb, as distal as possible (below the stifle)",
        "correct": true
      },
      {
        "text": "Left rear limb, as distal as possible",
        "correct": false
      },
      {
        "text": "Between the shoulder blades (interscapular region)",
        "correct": false
      },
      {
        "text": "Right front limb, below the elbow",
        "correct": false
      }
    ],
    "explanation": "Per AAFP guidelines, the rabies vaccine is given in the right rear limb as distally as possible. This allows tracking of vaccine-associated sarcomas (VAS) to specific vaccines, and distal limb placement allows for amputation with better prognosis if a sarcoma develops.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.2",
    "category": "Vaccine Administration",
    "question": "Where should the Feline Leukemia Virus (FeLV) vaccine be administered in cats?",
    "answers": [
      {
        "text": "Left rear limb, as distal as possible (below the stifle)",
        "correct": true
      },
      {
        "text": "Right rear limb, below the stifle",
        "correct": false
      },
      {
        "text": "Between the shoulder blades",
        "correct": false
      },
      {
        "text": "Left front limb, below the elbow",
        "correct": false
      }
    ],
    "explanation": "AAFP guidelines assign the left rear limb for FeLV vaccine. The mnemonic: Right Rear = Rabies, Left Rear = Leukemia (FeLV), Right Front = FVRCP. Each vaccine gets a distinct location to trace any sarcoma to the causative vaccine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.3",
    "category": "Vaccine Administration",
    "question": "Where should the FVRCP (core feline) vaccine be administered?",
    "answers": [
      {
        "text": "Right front limb, as distal as possible (below the elbow)",
        "correct": true
      },
      {
        "text": "Left front limb, below the elbow",
        "correct": false
      },
      {
        "text": "Right rear limb, below the stifle",
        "correct": false
      },
      {
        "text": "Interscapular region",
        "correct": false
      }
    ],
    "explanation": "The FVRCP vaccine is administered in the right front limb per AAFP guidelines. This keeps each vaccine in a distinct anatomical location for sarcoma tracking purposes.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.4",
    "category": "Vaccine Administration",
    "question": "Why should vaccines in cats NO LONGER be administered in the interscapular (between the shoulder blades) region?",
    "answers": [
      {
        "text": "If a vaccine-associated sarcoma develops there, surgical removal with adequate margins is extremely difficult due to the anatomy",
        "correct": true
      },
      {
        "text": "The interscapular region has poor blood supply, reducing vaccine efficacy",
        "correct": false
      },
      {
        "text": "Cats are more likely to have an allergic reaction at this location",
        "correct": false
      },
      {
        "text": "The vaccine cannot be absorbed properly through the thick skin in that area",
        "correct": false
      }
    ],
    "explanation": "Vaccine-associated sarcomas (VAS) are aggressive tumors that require wide surgical margins (3-5cm in all directions). The interscapular area overlies the spine and scapulae, making complete excision nearly impossible. Distal limb locations allow amputation as a curative option.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.5",
    "category": "Vaccine Administration",
    "question": "Which of the following is a core vaccine for dogs?",
    "answers": [
      {
        "text": "DAPP (Distemper, Adenovirus, Parvovirus, Parainfluenza)",
        "correct": true
      },
      {
        "text": "Bordetella bronchiseptica",
        "correct": false
      },
      {
        "text": "Leptospirosis",
        "correct": false
      },
      {
        "text": "Canine Influenza (H3N2/H3N8)",
        "correct": false
      }
    ],
    "explanation": "Core vaccines are recommended for ALL dogs regardless of lifestyle. DAPP and Rabies are core canine vaccines. Bordetella, Leptospirosis, Lyme, and Canine Influenza are non-core (lifestyle-dependent).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.6",
    "category": "Vaccine Administration",
    "question": "At what age should a puppy typically begin the DAPP vaccination series?",
    "answers": [
      {
        "text": "6–8 weeks of age",
        "correct": true
      },
      {
        "text": "2 weeks of age",
        "correct": false
      },
      {
        "text": "12–16 weeks of age (single dose only)",
        "correct": false
      },
      {
        "text": "6 months of age",
        "correct": false
      }
    ],
    "explanation": "The DAPP series begins at 6-8 weeks, with boosters every 3-4 weeks until at least 16 weeks of age. This timing accounts for the decline of maternal antibodies while building the puppy's own immune response.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.7",
    "category": "Vaccine Administration",
    "question": "How often should DAPP boosters be given during the puppy vaccination series?",
    "answers": [
      {
        "text": "Every 3–4 weeks until at least 16 weeks of age",
        "correct": true
      },
      {
        "text": "Once at 8 weeks and once at 16 weeks only",
        "correct": false
      },
      {
        "text": "Weekly from 6 to 16 weeks",
        "correct": false
      },
      {
        "text": "Every 6 months for the first year",
        "correct": false
      }
    ],
    "explanation": "Puppies receive DAPP every 3-4 weeks (typically at 6-8, 10-12, and 14-16 weeks). Multiple boosters are needed because maternal antibodies can interfere with vaccine response, and their decline varies between individuals.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.8",
    "category": "Vaccine Administration",
    "question": "The Bordetella bronchiseptica vaccine for dogs can be given by which route(s)?",
    "answers": [
      {
        "text": "Intranasal, oral, or injectable (subcutaneous) — depending on the product",
        "correct": true
      },
      {
        "text": "Intravenous only",
        "correct": false
      },
      {
        "text": "Intramuscular only",
        "correct": false
      },
      {
        "text": "Topical (applied to the skin)",
        "correct": false
      }
    ],
    "explanation": "Bordetella vaccines come in intranasal, oral, and injectable formulations. The intranasal and oral routes provide rapid local mucosal immunity and are often preferred for dogs entering boarding or daycare situations.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.9",
    "category": "Vaccine Administration",
    "question": "Which of the following is a core vaccine for cats?",
    "answers": [
      {
        "text": "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)",
        "correct": true
      },
      {
        "text": "FeLV (Feline Leukemia Virus)",
        "correct": false
      },
      {
        "text": "FIV (Feline Immunodeficiency Virus)",
        "correct": false
      },
      {
        "text": "Chlamydophila felis",
        "correct": false
      }
    ],
    "explanation": "Core cat vaccines include FVRCP and Rabies. FeLV is considered core for kittens but non-core for adult indoor-only cats. FIV and Chlamydophila are non-core.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.10",
    "category": "Vaccine Administration",
    "question": "A cat develops facial swelling, vomiting, and hives within 30 minutes of vaccination. This is most likely:",
    "answers": [
      {
        "text": "A type I hypersensitivity (anaphylactic) reaction requiring immediate treatment with epinephrine",
        "correct": true
      },
      {
        "text": "A normal immune response that will resolve on its own",
        "correct": false
      },
      {
        "text": "A vaccine-associated sarcoma",
        "correct": false
      },
      {
        "text": "A delayed type IV hypersensitivity reaction",
        "correct": false
      }
    ],
    "explanation": "Acute signs (facial swelling, urticaria, vomiting) within minutes to hours of vaccination indicate a type I (immediate) hypersensitivity reaction. Treatment includes epinephrine, diphenhydramine, and supportive care. Sarcomas develop weeks to months later.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.11",
    "category": "Vaccine Administration",
    "question": "What is the earliest age at which a puppy or kitten can typically receive a rabies vaccine?",
    "answers": [
      {
        "text": "12–16 weeks of age (varies by local law and product label)",
        "correct": true
      },
      {
        "text": "4 weeks of age",
        "correct": false
      },
      {
        "text": "6 months of age",
        "correct": false
      },
      {
        "text": "1 year of age",
        "correct": false
      }
    ],
    "explanation": "Most jurisdictions and vaccine labels specify the first rabies vaccine at 12-16 weeks of age. A booster is given 1 year later, then every 1-3 years depending on the product and local regulations.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q2.12",
    "category": "Vaccine Administration",
    "question": "Most vaccines in dogs are administered by which route?",
    "answers": [
      {
        "text": "Subcutaneous (SQ) injection",
        "correct": true
      },
      {
        "text": "Intravenous (IV) injection",
        "correct": false
      },
      {
        "text": "Intramuscular (IM) injection in all cases",
        "correct": false
      },
      {
        "text": "Intradermal injection",
        "correct": false
      }
    ],
    "explanation": "The majority of canine and feline vaccines are given subcutaneously. Some specific products (like certain rabies vaccines) may be labeled for IM use. Vaccines are never given IV.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.1",
    "category": "Anesthesia & Monitoring",
    "question": "What is the normal SpO2 range for a dog or cat under anesthesia?",
    "answers": [
      {
        "text": "95–100%",
        "correct": true
      },
      {
        "text": "85–90%",
        "correct": false
      },
      {
        "text": "75–80%",
        "correct": false
      },
      {
        "text": "90–93%",
        "correct": false
      }
    ],
    "explanation": "SpO2 (peripheral oxygen saturation) should be 95-100% under anesthesia. Values below 94% are concerning, and below 90% indicates significant hypoxemia requiring immediate intervention (check ET tube, increase O2 flow, manual ventilation).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.2",
    "category": "Anesthesia & Monitoring",
    "question": "What is the normal end-tidal CO2 (ETCO2) range during anesthesia in dogs and cats?",
    "answers": [
      {
        "text": "35–45 mmHg",
        "correct": true
      },
      {
        "text": "10–20 mmHg",
        "correct": false
      },
      {
        "text": "50–65 mmHg",
        "correct": false
      },
      {
        "text": "70–80 mmHg",
        "correct": false
      }
    ],
    "explanation": "Normal ETCO2 is 35-45 mmHg. Values below 30 mmHg suggest hyperventilation, while values above 55 mmHg indicate hypoventilation (consider assisting ventilation or checking for airway obstruction).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.3",
    "category": "Anesthesia & Monitoring",
    "question": "What is the normal heart rate range for a cat under anesthesia?",
    "answers": [
      {
        "text": "100–180 bpm",
        "correct": true
      },
      {
        "text": "60–80 bpm",
        "correct": false
      },
      {
        "text": "200–260 bpm",
        "correct": false
      },
      {
        "text": "40–60 bpm",
        "correct": false
      }
    ],
    "explanation": "Anesthetized cats normally maintain a heart rate of 100-180 bpm. Rates below 100 bpm in a cat are concerning for significant bradycardia and may require atropine or glycopyrrolate.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.4",
    "category": "Anesthesia & Monitoring",
    "question": "During anesthesia, the eye of a dog or cat rotates ventromedially (downward and inward). This indicates the patient is at which depth?",
    "answers": [
      {
        "text": "Stage III, Plane 2 — appropriate surgical depth",
        "correct": true
      },
      {
        "text": "Stage I — analgesia only, too light for surgery",
        "correct": false
      },
      {
        "text": "Stage II — excitement phase",
        "correct": false
      },
      {
        "text": "Stage III, Plane 4 — dangerously deep, near overdose",
        "correct": false
      }
    ],
    "explanation": "Ventromedial eye rotation is a hallmark of Stage III, Plane 2, which is the ideal surgical plane. At this depth, the palpebral reflex is absent but the corneal reflex remains. If the eye returns to central position, the patient may be either too light or too deep.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.5",
    "category": "Anesthesia & Monitoring",
    "question": "Which reflex, if LOST, indicates that the patient is dangerously deep under anesthesia?",
    "answers": [
      {
        "text": "Corneal reflex",
        "correct": true
      },
      {
        "text": "Palpebral (eyelid) reflex",
        "correct": false
      },
      {
        "text": "Pedal withdrawal reflex",
        "correct": false
      },
      {
        "text": "Swallowing reflex",
        "correct": false
      }
    ],
    "explanation": "The corneal reflex is one of the last reflexes lost and its absence indicates Stage III, Plane 4 or Stage IV (overdose), which is life-threatening. The palpebral reflex is normally absent at surgical depth (Plane 2) and is not cause for alarm.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.6",
    "category": "Anesthesia & Monitoring",
    "question": "Atipamezole is the reversal agent for which anesthetic drug?",
    "answers": [
      {
        "text": "Dexmedetomidine (alpha-2 adrenergic agonist)",
        "correct": true
      },
      {
        "text": "Midazolam (benzodiazepine)",
        "correct": false
      },
      {
        "text": "Hydromorphone (opioid)",
        "correct": false
      },
      {
        "text": "Propofol (IV induction agent)",
        "correct": false
      }
    ],
    "explanation": "Atipamezole is a highly selective alpha-2 antagonist that reverses the sedative and cardiovascular effects of alpha-2 agonists like dexmedetomidine and medetomidine. It provides rapid, reliable reversal.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.7",
    "category": "Anesthesia & Monitoring",
    "question": "Naloxone is the reversal agent for which class of drugs?",
    "answers": [
      {
        "text": "Opioids (morphine, fentanyl, hydromorphone, etc.)",
        "correct": true
      },
      {
        "text": "Alpha-2 agonists (dexmedetomidine)",
        "correct": false
      },
      {
        "text": "Benzodiazepines (diazepam, midazolam)",
        "correct": false
      },
      {
        "text": "Phenothiazines (acepromazine)",
        "correct": false
      }
    ],
    "explanation": "Naloxone is a competitive opioid antagonist that reverses respiratory depression, sedation, and analgesia from opioids. Important caveat: it also reverses pain control, so patients may need alternative analgesia.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.8",
    "category": "Anesthesia & Monitoring",
    "question": "Flumazenil is the reversal agent for which class of drugs?",
    "answers": [
      {
        "text": "Benzodiazepines (diazepam, midazolam)",
        "correct": true
      },
      {
        "text": "Opioids (morphine, fentanyl)",
        "correct": false
      },
      {
        "text": "Alpha-2 agonists (dexmedetomidine)",
        "correct": false
      },
      {
        "text": "Barbiturates (pentobarbital)",
        "correct": false
      }
    ],
    "explanation": "Flumazenil competitively binds to central benzodiazepine receptors, reversing sedation, muscle relaxation, and anxiolysis produced by diazepam and midazolam.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.9",
    "category": "Anesthesia & Monitoring",
    "question": "If a patient under anesthesia becomes bradycardic (dangerously low heart rate), which drug is most commonly administered as a first-line treatment?",
    "answers": [
      {
        "text": "Atropine (anticholinergic)",
        "correct": true
      },
      {
        "text": "Epinephrine",
        "correct": false
      },
      {
        "text": "Propofol",
        "correct": false
      },
      {
        "text": "Dexmedetomidine",
        "correct": false
      }
    ],
    "explanation": "Atropine is an anticholinergic that blocks vagal tone, increasing heart rate. Glycopyrrolate is another option. Epinephrine is reserved for cardiac arrest. Dexmedetomidine would worsen bradycardia as it is an alpha-2 agonist.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.10",
    "category": "Anesthesia & Monitoring",
    "question": "Stage II of anesthesia is also known as the:",
    "answers": [
      {
        "text": "Excitement stage — characterized by involuntary movement, irregular breathing, and increased reflexes",
        "correct": true
      },
      {
        "text": "Surgical anesthesia stage — ideal for procedures",
        "correct": false
      },
      {
        "text": "Analgesia stage — conscious but with reduced pain perception",
        "correct": false
      },
      {
        "text": "Overdose stage — respiratory and cardiovascular depression",
        "correct": false
      }
    ],
    "explanation": "Stage II is the excitement phase, which should be passed through as quickly as possible. It is characterized by erratic breathing, involuntary limb movement, paddling, vocalization, and heightened reflexes. Patients should not be stimulated during this stage.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.11",
    "category": "Anesthesia & Monitoring",
    "question": "What should you do FIRST if you notice a patient under anesthesia has a SpO2 of 88%?",
    "answers": [
      {
        "text": "Check the ET tube for kinking or obstruction, verify O2 flow, and begin manual ventilation (bagging)",
        "correct": true
      },
      {
        "text": "Immediately administer epinephrine",
        "correct": false
      },
      {
        "text": "Increase the vaporizer setting to deepen anesthesia",
        "correct": false
      },
      {
        "text": "Turn off the anesthetic and wait for the patient to wake up",
        "correct": false
      }
    ],
    "explanation": "SpO2 of 88% is significant hypoxemia. The first step is to ensure adequate oxygen delivery: check the ET tube patency, confirm the oxygen source is flowing, and assist ventilation by squeezing the reservoir bag. Increasing anesthetic depth would worsen the situation.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q3.12",
    "category": "Anesthesia & Monitoring",
    "question": "Which of the following is NOT typically used as a pre-anesthetic medication?",
    "answers": [
      {
        "text": "Propofol — it is an induction agent, not a pre-medication",
        "correct": true
      },
      {
        "text": "Dexmedetomidine (alpha-2 agonist sedative)",
        "correct": false
      },
      {
        "text": "Hydromorphone (opioid analgesic)",
        "correct": false
      },
      {
        "text": "Acepromazine (phenothiazine tranquilizer)",
        "correct": false
      }
    ],
    "explanation": "Propofol is a rapid-acting IV induction agent used to induce general anesthesia, not as a premedicant. Common premedicants include sedatives (dexmedetomidine, acepromazine), opioids (hydromorphone, butorphanol), and anticholinergics (atropine, glycopyrrolate).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.1",
    "category": "Pharmacology & Drug Calculations",
    "question": "A veterinarian orders Drug X at 5 mg/kg for a 20 kg dog. The drug concentration is 50 mg/mL. How many mL should you draw up?",
    "answers": [
      {
        "text": "2 mL",
        "correct": true
      },
      {
        "text": "5 mL",
        "correct": false
      },
      {
        "text": "1 mL",
        "correct": false
      },
      {
        "text": "10 mL",
        "correct": false
      }
    ],
    "explanation": "Dose = 20 kg × 5 mg/kg = 100 mg. Volume = 100 mg ÷ 50 mg/mL = 2 mL. The formula is: Volume (mL) = [Weight (kg) × Dose (mg/kg)] ÷ Concentration (mg/mL).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.2",
    "category": "Pharmacology & Drug Calculations",
    "question": "What is the standard maintenance fluid rate for a dog?",
    "answers": [
      {
        "text": "Approximately 2–2.5 mL/kg/hr (or 50–60 mL/kg/day)",
        "correct": true
      },
      {
        "text": "10 mL/kg/hr",
        "correct": false
      },
      {
        "text": "0.5 mL/kg/hr",
        "correct": false
      },
      {
        "text": "100 mL/kg/day",
        "correct": false
      }
    ],
    "explanation": "Maintenance fluid rate for dogs is approximately 50-60 mL/kg/day, which calculates to roughly 2-2.5 mL/kg/hr. For a 20 kg dog, this is about 40-50 mL/hr. Cats require slightly less at 40-50 mL/kg/day.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.3",
    "category": "Pharmacology & Drug Calculations",
    "question": "What is the IV crystalloid shock dose (total volume) for a dog?",
    "answers": [
      {
        "text": "Up to 90 mL/kg, given in incremental boluses of 10–20 mL/kg",
        "correct": true
      },
      {
        "text": "5 mL/kg total",
        "correct": false
      },
      {
        "text": "Up to 200 mL/kg",
        "correct": false
      },
      {
        "text": "1 mL/kg/hr",
        "correct": false
      }
    ],
    "explanation": "The crystalloid shock dose for dogs is up to 90 mL/kg. It is given in 10-20 mL/kg boluses over 15-20 minutes, reassessing perfusion parameters between each bolus. For cats, the total shock dose is lower at approximately 60 mL/kg.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.4",
    "category": "Pharmacology & Drug Calculations",
    "question": "What is the IV crystalloid shock dose for a cat?",
    "answers": [
      {
        "text": "Up to 60 mL/kg, given in incremental boluses of 5–10 mL/kg",
        "correct": true
      },
      {
        "text": "Up to 90 mL/kg (same as dogs)",
        "correct": false
      },
      {
        "text": "Up to 200 mL/kg",
        "correct": false
      },
      {
        "text": "1 mL/kg single bolus only",
        "correct": false
      }
    ],
    "explanation": "Cats are more susceptible to fluid overload than dogs. Their crystalloid shock dose is 60 mL/kg maximum, given in smaller 5-10 mL/kg boluses with careful reassessment. Volume overload can lead to pulmonary edema.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.5",
    "category": "Pharmacology & Drug Calculations",
    "question": "Ketamine is classified under which DEA controlled substance schedule?",
    "answers": [
      {
        "text": "Schedule III",
        "correct": true
      },
      {
        "text": "Schedule II",
        "correct": false
      },
      {
        "text": "Schedule IV",
        "correct": false
      },
      {
        "text": "Schedule V",
        "correct": false
      }
    ],
    "explanation": "Ketamine is a Schedule III controlled substance. It has moderate to low potential for physical and psychological dependence. All controlled substances require proper logging, secure storage, and DEA oversight.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.6",
    "category": "Pharmacology & Drug Calculations",
    "question": "Diazepam (Valium) is classified under which DEA controlled substance schedule?",
    "answers": [
      {
        "text": "Schedule IV",
        "correct": true
      },
      {
        "text": "Schedule II",
        "correct": false
      },
      {
        "text": "Schedule III",
        "correct": false
      },
      {
        "text": "It is not a controlled substance",
        "correct": false
      }
    ],
    "explanation": "Diazepam is Schedule IV, indicating low potential for abuse and dependence relative to Schedule III drugs. Other Schedule IV veterinary drugs include midazolam, butorphanol, phenobarbital, and tramadol.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.7",
    "category": "Pharmacology & Drug Calculations",
    "question": "Hydromorphone and fentanyl are classified under which DEA schedule?",
    "answers": [
      {
        "text": "Schedule II — high potential for abuse and severe dependence",
        "correct": true
      },
      {
        "text": "Schedule III",
        "correct": false
      },
      {
        "text": "Schedule IV",
        "correct": false
      },
      {
        "text": "Schedule V",
        "correct": false
      }
    ],
    "explanation": "Schedule II drugs have high abuse potential and include full-mu opioid agonists like hydromorphone, fentanyl, morphine, and oxymorphone. They require the highest level of record-keeping and security.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.8",
    "category": "Pharmacology & Drug Calculations",
    "question": "Which drug class do carprofen (Rimadyl), meloxicam (Metacam), and deracoxib (Deramaxx) belong to?",
    "answers": [
      {
        "text": "Non-steroidal anti-inflammatory drugs (NSAIDs)",
        "correct": true
      },
      {
        "text": "Opioid analgesics",
        "correct": false
      },
      {
        "text": "Corticosteroids",
        "correct": false
      },
      {
        "text": "Antibiotics",
        "correct": false
      }
    ],
    "explanation": "These are all NSAIDs commonly used for pain and inflammation in dogs. They work by inhibiting cyclooxygenase (COX) enzymes. Key concerns include GI ulceration, renal effects, and hepatotoxicity. They should NOT be used concurrently with corticosteroids.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.9",
    "category": "Pharmacology & Drug Calculations",
    "question": "Meloxicam should be used with extreme caution (or avoided entirely) in which species?",
    "answers": [
      {
        "text": "Cats — especially with repeated dosing, due to high risk of acute kidney injury",
        "correct": true
      },
      {
        "text": "Dogs — they are highly sensitive to all NSAIDs",
        "correct": false
      },
      {
        "text": "Horses — all NSAIDs are contraindicated in equines",
        "correct": false
      },
      {
        "text": "Rabbits — there are no safe pain medications for this species",
        "correct": false
      }
    ],
    "explanation": "While meloxicam has an FDA-approved single injectable dose for cats, repeated oral dosing carries significant risk of nephrotoxicity. The FDA has specifically warned against repeated meloxicam use in cats.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.10",
    "category": "Pharmacology & Drug Calculations",
    "question": "A 15 kg dog is 8% dehydrated. How much fluid (in mL) is needed to correct the deficit?",
    "answers": [
      {
        "text": "1,200 mL",
        "correct": true
      },
      {
        "text": "120 mL",
        "correct": false
      },
      {
        "text": "800 mL",
        "correct": false
      },
      {
        "text": "150 mL",
        "correct": false
      }
    ],
    "explanation": "Dehydration deficit = Body weight (kg) × % dehydration × 1000 = 15 × 0.08 × 1000 = 1,200 mL. This deficit is typically replaced over 12-24 hours, added to the maintenance fluid rate.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.11",
    "category": "Pharmacology & Drug Calculations",
    "question": "What is the standard dose of epinephrine for CPR in dogs and cats (IV/IO route)?",
    "answers": [
      {
        "text": "0.01 mg/kg of 1:10,000 dilution (low dose)",
        "correct": true
      },
      {
        "text": "1 mg/kg of 1:1,000 dilution",
        "correct": false
      },
      {
        "text": "0.1 mg/kg IV undiluted",
        "correct": false
      },
      {
        "text": "0.5 mg/kg subcutaneously",
        "correct": false
      }
    ],
    "explanation": "Per RECOVER CPR guidelines, epinephrine is given at 0.01 mg/kg IV/IO using the 1:10,000 dilution (= 0.1 mL/kg). If given endotracheally, the dose is 10x higher (0.1 mg/kg of 1:1,000). Repeated every 3-5 minutes during CPR.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q4.12",
    "category": "Pharmacology & Drug Calculations",
    "question": "Atropine during CPR is dosed at:",
    "answers": [
      {
        "text": "0.02–0.04 mg/kg IV/IO",
        "correct": true
      },
      {
        "text": "0.5 mg/kg IV",
        "correct": false
      },
      {
        "text": "2 mg/kg IM",
        "correct": false
      },
      {
        "text": "0.001 mg/kg SQ",
        "correct": false
      }
    ],
    "explanation": "Atropine at 0.02-0.04 mg/kg IV/IO is used during CPR for asystole or pulseless electrical activity (PEA) with a rate <60 bpm. It may be repeated every 3-5 minutes. The endotracheal dose is typically doubled.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.1",
    "category": "Laboratory Skills",
    "question": "Which blood draw site is preferred when a large-volume blood sample is needed from a dog or cat?",
    "answers": [
      {
        "text": "Jugular vein",
        "correct": true
      },
      {
        "text": "Cephalic vein",
        "correct": false
      },
      {
        "text": "Lateral saphenous vein",
        "correct": false
      },
      {
        "text": "Sublingual vein",
        "correct": false
      }
    ],
    "explanation": "The jugular vein is the largest easily accessible peripheral vessel and yields large-volume samples with minimal hemolysis. It is the preferred site for routine CBCs, chemistry panels, and any time multiple tubes are needed.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.2",
    "category": "Laboratory Skills",
    "question": "In cats, the preferred hindlimb blood draw site is the:",
    "answers": [
      {
        "text": "Medial saphenous (femoral) vein — located on the inside of the thigh",
        "correct": true
      },
      {
        "text": "Lateral saphenous vein — located on the outside of the hindlimb",
        "correct": false
      },
      {
        "text": "Dorsal pedal vein — located on top of the foot",
        "correct": false
      },
      {
        "text": "Coccygeal (tail) vein",
        "correct": false
      }
    ],
    "explanation": "In cats, the medial saphenous vein on the medial aspect of the hindlimb is preferred. In dogs, by contrast, the lateral saphenous on the outside of the hindlimb is used. This is a commonly tested species difference.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.3",
    "category": "Laboratory Skills",
    "question": "What is the normal PCV (packed cell volume/hematocrit) range for a dog?",
    "answers": [
      {
        "text": "37–55%",
        "correct": true
      },
      {
        "text": "20–30%",
        "correct": false
      },
      {
        "text": "60–75%",
        "correct": false
      },
      {
        "text": "10–15%",
        "correct": false
      }
    ],
    "explanation": "Normal canine PCV is 37-55%. Values below 37% indicate anemia, while values above 55% may indicate dehydration or polycythemia. For cats, normal PCV is 30-45%.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.4",
    "category": "Laboratory Skills",
    "question": "A cat has a PCV of 18%. This indicates:",
    "answers": [
      {
        "text": "Severe anemia — likely requires transfusion",
        "correct": true
      },
      {
        "text": "Normal for a cat",
        "correct": false
      },
      {
        "text": "Polycythemia (too many red blood cells)",
        "correct": false
      },
      {
        "text": "Dehydration",
        "correct": false
      }
    ],
    "explanation": "Normal feline PCV is 30-45%. A PCV of 18% is severely anemic. Clinical signs will include pale mucous membranes, tachycardia, weakness, and potentially collapse. A blood transfusion is often needed when PCV drops below 15-20%.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.5",
    "category": "Laboratory Skills",
    "question": "Normal urine specific gravity (USG) for a cat is:",
    "answers": [
      {
        "text": "1.035–1.065",
        "correct": true
      },
      {
        "text": "1.001–1.008",
        "correct": false
      },
      {
        "text": "1.010–1.015",
        "correct": false
      },
      {
        "text": "1.070–1.090",
        "correct": false
      }
    ],
    "explanation": "Cats concentrate their urine well, with normal USG of 1.035-1.065. Dogs have a wider normal range of 1.015-1.045. Isosthenuria (USG 1.008-1.012) indicates the kidneys are not concentrating or diluting urine and suggests renal tubular dysfunction.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.6",
    "category": "Laboratory Skills",
    "question": "On fecal flotation, you observe barrel-shaped eggs with prominent bipolar plugs (resembling a lemon or football). These are most likely:",
    "answers": [
      {
        "text": "Whipworm (Trichuris vulpis) eggs",
        "correct": true
      },
      {
        "text": "Roundworm (Toxocara) eggs",
        "correct": false
      },
      {
        "text": "Hookworm (Ancylostoma) eggs",
        "correct": false
      },
      {
        "text": "Coccidia (Cystoisospora) oocysts",
        "correct": false
      }
    ],
    "explanation": "Whipworm eggs are barrel-shaped with characteristic bipolar plugs at each end. Roundworm eggs are spherical with a thick, rough (mammillated) shell. Hookworm eggs are oval with a thin smooth shell and internal morula. Coccidia oocysts are small and round.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.7",
    "category": "Laboratory Skills",
    "question": "On fecal flotation, you see large (70–90 µm), round eggs with a thick, rough (pitted/mammillated), dark-brown shell. These are most likely:",
    "answers": [
      {
        "text": "Roundworm (Toxocara spp.) eggs",
        "correct": true
      },
      {
        "text": "Hookworm eggs",
        "correct": false
      },
      {
        "text": "Whipworm eggs",
        "correct": false
      },
      {
        "text": "Tapeworm eggs",
        "correct": false
      }
    ],
    "explanation": "Toxocara (roundworm) eggs are large, spherical, with a distinctive thick, coarsely mammillated (pitted) outer shell that appears brown/orange. They contain a single dark zygote filling most of the egg.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.8",
    "category": "Laboratory Skills",
    "question": "Struvite crystals in urine are most commonly associated with which urine pH?",
    "answers": [
      {
        "text": "Alkaline pH (>7.0)",
        "correct": true
      },
      {
        "text": "Strongly acidic pH (<5.0)",
        "correct": false
      },
      {
        "text": "Neutral pH only (exactly 7.0)",
        "correct": false
      },
      {
        "text": "pH has no effect on crystal formation",
        "correct": false
      }
    ],
    "explanation": "Struvite (magnesium ammonium phosphate) crystals form in alkaline to neutral urine. They are commonly associated with urinary tract infections in dogs (urease-producing bacteria raise pH). Calcium oxalate crystals, by contrast, form in acidic to neutral urine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.9",
    "category": "Laboratory Skills",
    "question": "What blood type are the majority of domestic cats?",
    "answers": [
      {
        "text": "Type A",
        "correct": true
      },
      {
        "text": "Type B",
        "correct": false
      },
      {
        "text": "Type AB",
        "correct": false
      },
      {
        "text": "Type O",
        "correct": false
      }
    ],
    "explanation": "Approximately 90-99% of domestic shorthair and longhair cats are Type A (prevalence varies by breed and region). Certain purebred cats (British Shorthair, Devon Rex, Cornish Rex) have higher rates of Type B. Type AB is very rare.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.10",
    "category": "Laboratory Skills",
    "question": "Why is blood typing and crossmatching critically important BEFORE the first transfusion in cats (unlike dogs)?",
    "answers": [
      {
        "text": "Cats have naturally occurring alloantibodies against other blood types, so even a first-time mismatched transfusion can cause a severe, potentially fatal hemolytic reaction",
        "correct": true
      },
      {
        "text": "Cats never need crossmatching — only blood typing is needed",
        "correct": false
      },
      {
        "text": "Cats develop antibodies only after their second transfusion, similar to dogs",
        "correct": false
      },
      {
        "text": "Blood typing is only important for Type AB cats",
        "correct": false
      }
    ],
    "explanation": "Unlike dogs, cats have pre-existing (naturally occurring) antibodies against other blood types. A Type B cat given Type A blood can have a rapidly fatal hemolytic reaction — even a single mL of mismatched blood. Dogs generally tolerate a first mismatched transfusion but develop antibodies afterward.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.11",
    "category": "Laboratory Skills",
    "question": "In dogs, the most clinically significant blood type for transfusion is:",
    "answers": [
      {
        "text": "DEA 1 (Dog Erythrocyte Antigen 1)",
        "correct": true
      },
      {
        "text": "DEA 3",
        "correct": false
      },
      {
        "text": "DEA 5",
        "correct": false
      },
      {
        "text": "DEA 7",
        "correct": false
      }
    ],
    "explanation": "DEA 1 (formerly subdivided as DEA 1.1/1.2, now reclassified as a single antigen per current ISBT nomenclature) is the most antigenic canine blood type and the most likely to cause a significant transfusion reaction. DEA 1 negative dogs are considered \"universal donors.\" All donor dogs should be typed for at minimum DEA 1.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q5.12",
    "category": "Laboratory Skills",
    "question": "An elevated BUN and creatinine on a chemistry panel, combined with a urine specific gravity of 1.010, most likely indicates:",
    "answers": [
      {
        "text": "Renal (kidney) disease — azotemia with inadequately concentrated urine",
        "correct": true
      },
      {
        "text": "Dehydration — which would cause concentrated urine",
        "correct": false
      },
      {
        "text": "Liver disease",
        "correct": false
      },
      {
        "text": "Diabetes mellitus",
        "correct": false
      }
    ],
    "explanation": "Elevated BUN and creatinine (azotemia) with isosthenuric urine (USG ~1.008-1.012) indicates the kidneys are failing to concentrate urine despite circulating waste products being elevated. In dehydration, you would expect concentrated urine with elevated BUN/creatinine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.1",
    "category": "Surgical Assisting",
    "question": "Metzenbaum scissors are used primarily for:",
    "answers": [
      {
        "text": "Cutting delicate or soft tissue during dissection",
        "correct": true
      },
      {
        "text": "Cutting heavy connective tissue like fascia",
        "correct": false
      },
      {
        "text": "Cutting suture material",
        "correct": false
      },
      {
        "text": "Cutting bandage material",
        "correct": false
      }
    ],
    "explanation": "Metzenbaum scissors (\"Metz\") have long handles with short, delicate blades, making them ideal for gentle tissue dissection. Mayo scissors are heavier and used for cutting tough tissue and sutures. Bandage scissors have a blunt tip for safe bandage removal.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.2",
    "category": "Surgical Assisting",
    "question": "Rochester-Carmalt hemostats are characterized by:",
    "answers": [
      {
        "text": "Longitudinal grooves along most of the jaw with cross-hatched (checkerboard) grooves at the tip",
        "correct": true
      },
      {
        "text": "Completely smooth jaws with no serrations",
        "correct": false
      },
      {
        "text": "Short, delicate jaws identical to mosquito hemostats",
        "correct": false
      },
      {
        "text": "Scissor blades at the tip for cutting tissue",
        "correct": false
      }
    ],
    "explanation": "Rochester-Carmalt hemostats have distinctive parallel longitudinal grooves along most of the jaw length, with a criss-cross (checkerboard) pattern at the tip. They are large instruments used to clamp tissue bundles and large vessels, commonly used in ovariohysterectomy (spay) procedures.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.3",
    "category": "Surgical Assisting",
    "question": "What temperature and duration are standard for autoclaving wrapped surgical instrument packs?",
    "answers": [
      {
        "text": "121°C (250°F) at 15 psi for a minimum of 30 minutes",
        "correct": true
      },
      {
        "text": "100°C (212°F) at normal pressure for 10 minutes",
        "correct": false
      },
      {
        "text": "160°C (320°F) at 30 psi for 5 minutes",
        "correct": false
      },
      {
        "text": "80°C (176°F) at 10 psi for 60 minutes",
        "correct": false
      }
    ],
    "explanation": "Standard steam autoclave sterilization uses 121°C (250°F) at 15 psi for at least 30 minutes for wrapped packs. A \"flash\" (immediate-use) cycle at 132°C (270°F) can be used for 3-10 minutes for unwrapped instruments in emergencies, but is not ideal.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.4",
    "category": "Surgical Assisting",
    "question": "Autoclave indicator tape on the outside of a surgical pack:",
    "answers": [
      {
        "text": "Confirms exposure to steam and heat but does NOT guarantee sterility of pack contents",
        "correct": true
      },
      {
        "text": "Guarantees that all instruments inside are sterile",
        "correct": false
      },
      {
        "text": "Indicates the pack has exceeded its expiration date",
        "correct": false
      },
      {
        "text": "Is only used for labeling, not for any sterilization indication",
        "correct": false
      }
    ],
    "explanation": "Indicator tape (external chemical indicator) changes color when exposed to autoclave conditions, but it only confirms the outside of the pack reached the required temperature. Biological indicators (spore tests) placed inside packs are needed to truly verify sterilization efficacy.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.5",
    "category": "Surgical Assisting",
    "question": "When putting on sterile surgical gloves using the closed-gloving technique, your hands should:",
    "answers": [
      {
        "text": "Remain inside the cuffs of the surgical gown at all times until the gloves are fully donned",
        "correct": true
      },
      {
        "text": "Be fully extended out of the gown sleeves before gloving",
        "correct": false
      },
      {
        "text": "Be bare (gown not yet worn) during gloving",
        "correct": false
      },
      {
        "text": "Touch the outside of the glove package to orient the gloves",
        "correct": false
      }
    ],
    "explanation": "In closed gloving, the hands stay within the gown cuffs, and the gloves are manipulated over the cuff without any bare skin exposure. This is the preferred method for maintaining sterility. Open gloving is used when a gown is not worn.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.6",
    "category": "Surgical Assisting",
    "question": "PDS (polydioxanone) suture is classified as:",
    "answers": [
      {
        "text": "Synthetic, monofilament, absorbable",
        "correct": true
      },
      {
        "text": "Natural, braided, absorbable",
        "correct": false
      },
      {
        "text": "Synthetic, braided, non-absorbable",
        "correct": false
      },
      {
        "text": "Natural, monofilament, non-absorbable",
        "correct": false
      }
    ],
    "explanation": "PDS is a synthetic monofilament absorbable suture with a long absorption time (~180 days). It is commonly used for body wall closure (linea alba), internal tissues, and areas where prolonged tensile strength is needed.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.7",
    "category": "Surgical Assisting",
    "question": "Nylon suture (Ethilon) is classified as:",
    "answers": [
      {
        "text": "Synthetic, monofilament, non-absorbable",
        "correct": true
      },
      {
        "text": "Natural, braided, absorbable",
        "correct": false
      },
      {
        "text": "Synthetic, braided, absorbable",
        "correct": false
      },
      {
        "text": "Natural, monofilament, absorbable",
        "correct": false
      }
    ],
    "explanation": "Nylon (Ethilon) is a synthetic non-absorbable monofilament suture commonly used for skin closure. Its monofilament structure provides smooth tissue passage and resists infection wicking. Skin sutures are removed 10-14 days post-surgery.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.8",
    "category": "Surgical Assisting",
    "question": "Which suture material is preferred in contaminated or infected wounds?",
    "answers": [
      {
        "text": "Monofilament suture (e.g., nylon or PDS) — because braided suture harbors bacteria in its interstices",
        "correct": true
      },
      {
        "text": "Braided suture (e.g., silk) — because it provides better tissue apposition",
        "correct": false
      },
      {
        "text": "Chromic gut — because it has natural antimicrobial properties",
        "correct": false
      },
      {
        "text": "Any suture is equally appropriate in contaminated wounds",
        "correct": false
      }
    ],
    "explanation": "Monofilament sutures have a smooth surface that resists bacterial colonization. Braided sutures (silk, Vicryl) have interstices between fibers that can harbor bacteria, wicking infection deeper into tissue. This makes monofilament the clear choice in contaminated environments.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.9",
    "category": "Surgical Assisting",
    "question": "The simple interrupted suture pattern is characterized by:",
    "answers": [
      {
        "text": "Each individual stitch is placed and tied off separately — if one stitch fails, the others hold",
        "correct": true
      },
      {
        "text": "A single continuous running thread closes the entire incision",
        "correct": false
      },
      {
        "text": "Each stitch crosses over itself in an X pattern",
        "correct": false
      },
      {
        "text": "Sutures are placed within the skin layers and are never visible externally",
        "correct": false
      }
    ],
    "explanation": "Simple interrupted is the most basic and commonly used pattern. Each stitch is independent, providing excellent security — if one suture breaks or is removed, the rest continue to hold the wound closed.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q6.10",
    "category": "Surgical Assisting",
    "question": "For an ovariohysterectomy (spay) in a dog, the patient is positioned in:",
    "answers": [
      {
        "text": "Dorsal recumbency (on the back)",
        "correct": true
      },
      {
        "text": "Right lateral recumbency",
        "correct": false
      },
      {
        "text": "Sternal recumbency (on the chest)",
        "correct": false
      },
      {
        "text": "Left lateral recumbency",
        "correct": false
      }
    ],
    "explanation": "The dog is positioned on its back (dorsal recumbency) for a ventral midline approach to access the ovaries and uterus. The incision is made along the ventral midline, caudal to the umbilicus.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.1",
    "category": "Radiology & Imaging",
    "question": "What does the acronym ALARA stand for in radiation safety?",
    "answers": [
      {
        "text": "As Low As Reasonably Achievable",
        "correct": true
      },
      {
        "text": "Always Lead-Apron Required for All",
        "correct": false
      },
      {
        "text": "Automatic Limitation And Radiation Assessment",
        "correct": false
      },
      {
        "text": "Annual Limit of Absorbed Radiation Allowance",
        "correct": false
      }
    ],
    "explanation": "ALARA is the guiding principle of radiation safety: minimize exposure through reduced time near the source, maximized distance from the beam, and proper shielding (lead aprons, gloves, thyroid shields).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.2",
    "category": "Radiology & Imaging",
    "question": "In a ventrodorsal (VD) radiographic view, the patient is positioned:",
    "answers": [
      {
        "text": "On its back (dorsal recumbency) with the X-ray beam traveling from ventral to dorsal",
        "correct": true
      },
      {
        "text": "On its stomach (sternal recumbency) with the beam going dorsal to ventral",
        "correct": false
      },
      {
        "text": "On its side (lateral recumbency)",
        "correct": false
      },
      {
        "text": "Standing on all four legs",
        "correct": false
      }
    ],
    "explanation": "The naming convention describes beam direction: Ventro(first)-Dorsal(second) means the beam enters ventrally and exits dorsally, so the patient must be on its back. The cassette/detector is under the patient's dorsum.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.3",
    "category": "Radiology & Imaging",
    "question": "In a dorsoventral (DV) radiographic view, the patient is positioned:",
    "answers": [
      {
        "text": "On its stomach (sternal recumbency) with the beam traveling from dorsal to ventral",
        "correct": true
      },
      {
        "text": "On its back (dorsal recumbency)",
        "correct": false
      },
      {
        "text": "On its right side",
        "correct": false
      },
      {
        "text": "Hanging vertically by the forelimbs",
        "correct": false
      }
    ],
    "explanation": "Dorso(first)-Ventral(second) = beam enters dorsally and exits ventrally. The patient lies on its chest/abdomen. DV is often preferred for dyspneic (difficulty breathing) patients because sternal recumbency is less stressful than lying on their back.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.4",
    "category": "Radiology & Imaging",
    "question": "Why is the DV view often preferred over the VD view for a patient with respiratory distress?",
    "answers": [
      {
        "text": "Sternal recumbency (DV) is less stressful and allows easier breathing than dorsal recumbency (VD)",
        "correct": true
      },
      {
        "text": "DV gives a better view of the heart",
        "correct": false
      },
      {
        "text": "VD requires the patient to be sedated, while DV does not",
        "correct": false
      },
      {
        "text": "DV uses less radiation than VD",
        "correct": false
      }
    ],
    "explanation": "A dyspneic patient placed on its back (VD) may decompensate because the abdominal organs compress the lungs. Sternal recumbency (DV) is a more natural posture that maintains better lung ventilation and is safer for compromised patients.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.5",
    "category": "Radiology & Imaging",
    "question": "The three principles of radiation protection are:",
    "answers": [
      {
        "text": "Time, distance, and shielding",
        "correct": true
      },
      {
        "text": "Speed, accuracy, and monitoring",
        "correct": false
      },
      {
        "text": "Collimation, filtration, and exposure",
        "correct": false
      },
      {
        "text": "kVp, mA, and time",
        "correct": false
      }
    ],
    "explanation": "Minimize time of exposure, maximize distance from the radiation source, and use shielding (lead aprons, gloves, thyroid shields, lead-lined walls). These three principles implement the ALARA concept.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.6",
    "category": "Radiology & Imaging",
    "question": "Dosimetry badges worn by veterinary staff are used to:",
    "answers": [
      {
        "text": "Monitor cumulative radiation exposure over time",
        "correct": true
      },
      {
        "text": "Protect the wearer from radiation",
        "correct": false
      },
      {
        "text": "Determine the correct exposure settings for each patient",
        "correct": false
      },
      {
        "text": "Detect radioactive contamination on clothing",
        "correct": false
      }
    ],
    "explanation": "Dosimetry badges (film badges or OSL dosimeters) are personal monitoring devices that record radiation exposure. They are worn at the collar level, outside the lead apron, and are collected and analyzed regularly (usually monthly or quarterly) to ensure staff stay within safe exposure limits.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.7",
    "category": "Radiology & Imaging",
    "question": "When manually restraining a patient during radiography is absolutely unavoidable, personnel must:",
    "answers": [
      {
        "text": "Wear lead aprons, gloves, and thyroid shields, and keep all body parts out of the primary beam",
        "correct": true
      },
      {
        "text": "Simply stand as far from the machine as possible without any PPE",
        "correct": false
      },
      {
        "text": "Only wear lead gloves — aprons are not needed",
        "correct": false
      },
      {
        "text": "Hold their breath to reduce radiation absorption",
        "correct": false
      }
    ],
    "explanation": "If sedation/chemical restraint or positioning aids cannot be used and manual restraint is unavoidable, all exposed personnel must wear full lead PPE and ensure NO body part enters the primary beam. Chemical restraint or positioning devices should be used whenever possible.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.8",
    "category": "Radiology & Imaging",
    "question": "Collimation of the X-ray beam is important because it:",
    "answers": [
      {
        "text": "Reduces the area of tissue exposed to radiation and improves image quality by reducing scatter",
        "correct": true
      },
      {
        "text": "Increases the amount of radiation needed for a diagnostic image",
        "correct": false
      },
      {
        "text": "Eliminates the need for lead aprons",
        "correct": false
      },
      {
        "text": "Only affects the brightness of the image, not safety",
        "correct": false
      }
    ],
    "explanation": "Collimation (restricting the beam to only the area of interest) reduces patient exposure, reduces scatter radiation (improving contrast), and reduces staff exposure. It is a key component of the ALARA principle.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.9",
    "category": "Radiology & Imaging",
    "question": "A right lateral radiographic view means:",
    "answers": [
      {
        "text": "The patient's right side is against the cassette/table (right lateral recumbency), and the beam enters from the left",
        "correct": true
      },
      {
        "text": "The patient's left side is against the table, and the beam enters from the right",
        "correct": false
      },
      {
        "text": "The beam enters from the patient's right side",
        "correct": false
      },
      {
        "text": "The patient is standing and the beam enters from the right",
        "correct": false
      }
    ],
    "explanation": "In radiology naming convention, the side listed is the side DOWN (closest to the film/detector). Right lateral = right side down. The beam enters from the opposite (left) side, passes through the patient, and hits the film on the right.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q7.10",
    "category": "Radiology & Imaging",
    "question": "Which of the following is NOT standard personal protective equipment (PPE) for radiography?",
    "answers": [
      {
        "text": "Lead-lined face mask — not standard radiographic PPE",
        "correct": true
      },
      {
        "text": "Lead apron",
        "correct": false
      },
      {
        "text": "Lead gloves",
        "correct": false
      },
      {
        "text": "Thyroid shield",
        "correct": false
      }
    ],
    "explanation": "Standard radiographic PPE includes lead aprons, lead gloves (when hands may be near the beam), and thyroid shields. Lead face masks are not standard equipment. Lead glasses may be used in facilities with high caseloads (e.g., fluoroscopy).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.1",
    "category": "Emergency & Critical Care",
    "question": "Per RECOVER CPR guidelines, what is the recommended chest compression rate for dogs and cats?",
    "answers": [
      {
        "text": "100–120 compressions per minute",
        "correct": true
      },
      {
        "text": "60 compressions per minute",
        "correct": false
      },
      {
        "text": "30 compressions per minute",
        "correct": false
      },
      {
        "text": "200 compressions per minute",
        "correct": false
      }
    ],
    "explanation": "RECOVER (REassessment Campaign On VEterinary Resuscitation) recommends 100-120 compressions per minute for both dogs and cats. Compressions should achieve 1/3 to 1/2 the width of the chest. This rate is the same as human AHA guidelines.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.2",
    "category": "Emergency & Critical Care",
    "question": "What is the compression-to-ventilation ratio for an un-intubated patient during CPR?",
    "answers": [
      {
        "text": "30:2 (30 compressions, then 2 breaths)",
        "correct": true
      },
      {
        "text": "15:2",
        "correct": false
      },
      {
        "text": "5:1",
        "correct": false
      },
      {
        "text": "Continuous compressions with no ventilation",
        "correct": false
      }
    ],
    "explanation": "For un-intubated patients, the ratio is 30:2. Once the patient is intubated, compressions become continuous (uninterrupted) while ventilation is provided asynchronously at 10 breaths per minute.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.3",
    "category": "Emergency & Critical Care",
    "question": "During CPR on an intubated patient, how often should ventilations be given?",
    "answers": [
      {
        "text": "10 breaths per minute (one breath every 6 seconds), asynchronous with compressions",
        "correct": true
      },
      {
        "text": "30 breaths per minute",
        "correct": false
      },
      {
        "text": "Only when compressions are paused",
        "correct": false
      },
      {
        "text": "2 breaths after every 30 compressions",
        "correct": false
      }
    ],
    "explanation": "Once intubated, ventilation and compressions are decoupled (asynchronous). Provide 10 breaths/min while maintaining continuous chest compressions. This maximizes coronary perfusion by avoiding interruptions.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.4",
    "category": "Emergency & Critical Care",
    "question": "The classic signs of shock in a dog include all of the following EXCEPT:",
    "answers": [
      {
        "text": "Bradycardia and hypertension — these are NOT typical of early/compensatory shock in dogs",
        "correct": true
      },
      {
        "text": "Tachycardia (elevated heart rate)",
        "correct": false
      },
      {
        "text": "Pale or muddy mucous membranes",
        "correct": false
      },
      {
        "text": "Prolonged capillary refill time (CRT > 2 seconds)",
        "correct": false
      }
    ],
    "explanation": "Shock in dogs progresses through stages. In early compensatory shock, tachycardia and bounding pulses develop as the body attempts to maintain blood pressure; membranes may be hyperemic (injected) with rapid CRT. As shock progresses to decompensatory stages, hypotension, weak/thready pulses, pale or muddy membranes, and prolonged CRT develop. Bradycardia and hypertension are not typical of any shock stage. Cats differ — they often present with bradycardia and hypothermia in decompensated shock.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.5",
    "category": "Emergency & Critical Care",
    "question": "A dog ingests dark chocolate. The toxic component of greatest concern is:",
    "answers": [
      {
        "text": "Theobromine (methylxanthine)",
        "correct": true
      },
      {
        "text": "Sucrose (sugar)",
        "correct": false
      },
      {
        "text": "Cocoa butter (fat)",
        "correct": false
      },
      {
        "text": "Caffeine (though present, theobromine is the primary toxin)",
        "correct": false
      }
    ],
    "explanation": "Theobromine is the primary toxic methylxanthine in chocolate for dogs. Dark/baker's chocolate has the highest concentration (~130-450 mg/oz). Mild signs occur at ~20 mg/kg, cardiac effects at ~40-50 mg/kg, and seizures at >60 mg/kg theobromine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.6",
    "category": "Emergency & Critical Care",
    "question": "Xylitol (birch sugar) ingestion in dogs can cause which two major clinical syndromes?",
    "answers": [
      {
        "text": "Hypoglycemia (rapid insulin release) and hepatic (liver) failure",
        "correct": true
      },
      {
        "text": "Hyperglycemia and kidney failure",
        "correct": false
      },
      {
        "text": "Respiratory depression and cardiac arrest",
        "correct": false
      },
      {
        "text": "Hemolytic anemia and coagulopathy",
        "correct": false
      }
    ],
    "explanation": "Xylitol causes a massive insulin release in dogs, leading to severe hypoglycemia within 30-60 minutes. At higher doses (>0.5 g/kg), it can cause acute hepatic necrosis within 12-72 hours. Blood glucose monitoring and IV dextrose are essential.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.7",
    "category": "Emergency & Critical Care",
    "question": "Which plant is acutely nephrotoxic (causes kidney failure) in cats even with very small exposures, including contact with pollen?",
    "answers": [
      {
        "text": "Lilies (Lilium and Hemerocallis species — Easter lily, tiger lily, daylily, etc.)",
        "correct": true
      },
      {
        "text": "Poinsettia",
        "correct": false
      },
      {
        "text": "Aloe vera",
        "correct": false
      },
      {
        "text": "Spider plant",
        "correct": false
      }
    ],
    "explanation": "True lilies (Lilium spp.) and daylilies (Hemerocallis spp.) are profoundly nephrotoxic to cats. ALL parts of the plant are toxic, including pollen and vase water. Even small exposures can cause fatal acute kidney injury within 24-72 hours without aggressive IV fluid therapy.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.8",
    "category": "Emergency & Critical Care",
    "question": "Grapes and raisins are toxic to dogs primarily because they cause:",
    "answers": [
      {
        "text": "Acute kidney injury (nephrotoxicity) — the specific toxic agent is still unknown",
        "correct": true
      },
      {
        "text": "Liver failure",
        "correct": false
      },
      {
        "text": "Severe hemolytic anemia",
        "correct": false
      },
      {
        "text": "Pancreatitis",
        "correct": false
      }
    ],
    "explanation": "Grapes, raisins, and currants can cause acute kidney injury in dogs. The toxic principle remains unidentified (recent research suggests tartaric acid may be involved). Even small amounts can be toxic, and there is no known safe dose. Treatment includes decontamination and aggressive IV fluid therapy.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.9",
    "category": "Emergency & Critical Care",
    "question": "A Robert Jones bandage is primarily used for:",
    "answers": [
      {
        "text": "Temporary immobilization and swelling control of fractures or injuries of the distal limb (below the elbow or stifle)",
        "correct": true
      },
      {
        "text": "Covering wounds on the head and neck",
        "correct": false
      },
      {
        "text": "Permanent fracture fixation as an alternative to surgery",
        "correct": false
      },
      {
        "text": "Wrapping the thorax after rib fractures",
        "correct": false
      }
    ],
    "explanation": "The Robert Jones bandage is a heavily padded bandage that provides temporary stabilization of distal limb injuries, reduces swelling through compression, and immobilizes the limb until definitive treatment (surgery) can be performed. It is NOT appropriate for proximal limb (femur/humerus) fractures.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.10",
    "category": "Emergency & Critical Care",
    "question": "A properly applied bandage has three layers. From innermost to outermost, they are:",
    "answers": [
      {
        "text": "Primary (contact) layer → secondary (padded/absorbent) layer → tertiary (outer protective) layer",
        "correct": true
      },
      {
        "text": "Padded layer → contact layer → outer layer",
        "correct": false
      },
      {
        "text": "Tape → gauze → cotton",
        "correct": false
      },
      {
        "text": "Outer wrap → absorbent layer → wound dressing",
        "correct": false
      }
    ],
    "explanation": "The contact layer touches the wound (nonadherent or adherent depending on wound stage). The secondary layer provides padding and absorbs exudate. The tertiary layer protects and holds everything in place (conforming gauze, Vetrap/elastic wrap).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.11",
    "category": "Emergency & Critical Care",
    "question": "After applying a distal limb bandage, which area should be left exposed to monitor for vascular compromise?",
    "answers": [
      {
        "text": "The toes (digits) — checked for swelling, coldness, and discoloration",
        "correct": true
      },
      {
        "text": "The elbow joint",
        "correct": false
      },
      {
        "text": "The inguinal region",
        "correct": false
      },
      {
        "text": "Nothing needs to be left exposed",
        "correct": false
      }
    ],
    "explanation": "The two middle toes (digits 3 and 4) are typically left exposed so they can be monitored for swelling, coldness, pain, and discoloration. These signs indicate the bandage may be too tight and compromising blood flow.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q8.12",
    "category": "Emergency & Critical Care",
    "question": "A cat presents in decompensated shock. Unlike dogs, cats in decompensatory shock classically present with:",
    "answers": [
      {
        "text": "Bradycardia and hypothermia",
        "correct": true
      },
      {
        "text": "Tachycardia and fever",
        "correct": false
      },
      {
        "text": "Hypertension and bounding pulses",
        "correct": false
      },
      {
        "text": "Bright red mucous membranes and rapid CRT",
        "correct": false
      }
    ],
    "explanation": "Cats in decompensated shock often present with bradycardia (not tachycardia), hypothermia, and weak pulses — the opposite of the classic \"dog shock\" presentation. This is a critical species difference that affects treatment decisions.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.1",
    "category": "Restraint & Handling",
    "question": "The \"burrito wrap\" (towel wrap) is a fear-free restraint technique primarily used for:",
    "answers": [
      {
        "text": "Cats — provides secure restraint while minimizing stress and the need for scruffing",
        "correct": true
      },
      {
        "text": "Large-breed dogs",
        "correct": false
      },
      {
        "text": "Horses during hoof trimming",
        "correct": false
      },
      {
        "text": "Reptiles during feeding",
        "correct": false
      }
    ],
    "explanation": "The burrito wrap involves placing the cat on a large towel, then wrapping the towel snugly around the body, leaving only the head exposed (or exposing a specific limb for procedures). It provides secure restraint while giving the cat a sense of being hidden and protected.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.2",
    "category": "Restraint & Handling",
    "question": "Modern fear-free veterinary practice recommends AGAINST routine scruffing of cats because:",
    "answers": [
      {
        "text": "It can cause pain, fear, anxiety, and stress, and is no longer considered humane best practice",
        "correct": true
      },
      {
        "text": "It is illegal in all states",
        "correct": false
      },
      {
        "text": "It makes cats more cooperative during procedures",
        "correct": false
      },
      {
        "text": "It has no effect on cats at all",
        "correct": false
      }
    ],
    "explanation": "While scruffing was historically standard practice, current fear-free and AAFP guidelines recognize it causes distress in adult cats. Alternative techniques include towel wraps, gentle shoulder pressure, minimal restraint, and distraction with treats. Scruffing may be acceptable only as a last resort in emergencies.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.3",
    "category": "Restraint & Handling",
    "question": "When restraining a dog for a cephalic blood draw, the restrainer should:",
    "answers": [
      {
        "text": "Hold off the vein by wrapping the hand around the forelimb proximal to the elbow, rotating the vein laterally, while stabilizing the dog's body and head with the other arm",
        "correct": true
      },
      {
        "text": "Hold the dog by the scruff of the neck while a second person holds the leg",
        "correct": false
      },
      {
        "text": "Place the dog in dorsal recumbency",
        "correct": false
      },
      {
        "text": "Hold the dog's muzzle closed with both hands",
        "correct": false
      }
    ],
    "explanation": "For cephalic venipuncture, the restrainer sits or stands at the dog's head, wraps one arm around the dog's body/neck for stability, and uses the other hand to occlude the cephalic vein just above the elbow while extending the forelimb and rotating the vein to the lateral surface.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.4",
    "category": "Restraint & Handling",
    "question": "The lateral saphenous vein in dogs is accessed with the dog in which position?",
    "answers": [
      {
        "text": "Lateral recumbency (lying on the side), with the upper hindlimb held out of the way",
        "correct": true
      },
      {
        "text": "Dorsal recumbency",
        "correct": false
      },
      {
        "text": "Standing with the hindlimb extended backward",
        "correct": false
      },
      {
        "text": "Sternal recumbency",
        "correct": false
      }
    ],
    "explanation": "The dog is placed in lateral recumbency. The person restraining holds the upper hindlimb out of the way and occludes the lateral saphenous vein on the down leg by applying pressure above the stifle/hock on the lateral aspect.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.5",
    "category": "Restraint & Handling",
    "question": "Which of the following is a key principle of Fear-Free veterinary handling?",
    "answers": [
      {
        "text": "Use the minimum restraint necessary to safely perform the procedure, and employ treats, pheromones, and gentle handling",
        "correct": true
      },
      {
        "text": "Always use the maximum restraint available to prevent any chance of being bitten",
        "correct": false
      },
      {
        "text": "Complete the procedure as quickly as possible, regardless of the animal's stress level",
        "correct": false
      },
      {
        "text": "Sedate every patient before any examination",
        "correct": false
      }
    ],
    "explanation": "Fear-Free methodology emphasizes minimal restraint, positive experiences (treats, pheromones like Feliway/Adaptil), gentle handling, and reading body language. The goal is to reduce fear, anxiety, and stress (FAS) at every veterinary visit.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.6",
    "category": "Restraint & Handling",
    "question": "Before muzzling a dog, a veterinary technician should first:",
    "answers": [
      {
        "text": "Assess for brachycephaly (short muzzle), respiratory compromise, or vomiting risk — muzzles can be dangerous in these cases",
        "correct": true
      },
      {
        "text": "Sedate the dog",
        "correct": false
      },
      {
        "text": "Place the dog under general anesthesia",
        "correct": false
      },
      {
        "text": "Ask the owner to leave the room (muzzling should always be done out of client view)",
        "correct": false
      }
    ],
    "explanation": "Brachycephalic dogs (Pugs, Bulldogs, etc.) may not tolerate standard muzzles due to their short facial structure, and muzzling can worsen their already compromised breathing. Dogs that are vomiting should not be muzzled due to aspiration risk. Basket muzzles are preferable to cloth muzzles as they allow panting.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.7",
    "category": "Restraint & Handling",
    "question": "For jugular venipuncture in a cat, the cat should be positioned:",
    "answers": [
      {
        "text": "Sitting or sternal, with the head gently extended upward and slightly to one side, and the front legs held down off the table edge or gently restrained",
        "correct": true
      },
      {
        "text": "In dorsal recumbency (on the back) with all four limbs extended",
        "correct": false
      },
      {
        "text": "Standing on all fours without any head restraint",
        "correct": false
      },
      {
        "text": "Wrapped in a towel with no neck access",
        "correct": false
      }
    ],
    "explanation": "For jugular access, the cat sits or lies sternal while the restrainer gently extends the head dorsally and slightly laterally to expose the jugular groove. The front legs are held down or the cat is positioned at the table edge to prevent interference with the venipuncture.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q9.8",
    "category": "Restraint & Handling",
    "question": "When handling a fractious cat, which of the following tools can aid in safe handling?",
    "answers": [
      {
        "text": "All of the following: towels, cat muzzles, Feliway spray, squeeze cages, thick leather gloves (as last resort)",
        "correct": true
      },
      {
        "text": "Only chemical sedation — no physical restraint tools should be used",
        "correct": false
      },
      {
        "text": "Scruffing is the only acceptable method for fractious cats",
        "correct": false
      },
      {
        "text": "Holding the cat by the tail to prevent biting",
        "correct": false
      }
    ],
    "explanation": "Multiple tools exist for fractious cat handling: towels for wrapping, cat-specific muzzles, Feliway (feline pheromone) spray, squeeze cages for injections through cage bars, and as a last resort, heavy gloves. Holding by the tail is painful and dangerous.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.1",
    "category": "Medical Nursing & Patient Care",
    "question": "What is the normal rectal temperature range for both dogs and cats?",
    "answers": [
      {
        "text": "100.0–102.5°F (37.8–39.2°C)",
        "correct": true
      },
      {
        "text": "97.0–98.6°F (36.1–37.0°C) — this is the human normal range",
        "correct": false
      },
      {
        "text": "104.0–106.0°F (40.0–41.1°C)",
        "correct": false
      },
      {
        "text": "95.0–97.0°F (35.0–36.1°C)",
        "correct": false
      }
    ],
    "explanation": "Dogs and cats share a similar normal temperature range of 100.0-102.5°F. Temperatures above 103°F may indicate fever or hyperthermia, while temperatures below 99°F may indicate hypothermia, particularly concerning under anesthesia.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.2",
    "category": "Medical Nursing & Patient Care",
    "question": "The normal resting heart rate for a cat is:",
    "answers": [
      {
        "text": "140–220 beats per minute",
        "correct": true
      },
      {
        "text": "60–100 beats per minute (this is the human range)",
        "correct": false
      },
      {
        "text": "70–120 beats per minute (this is more typical of a large dog)",
        "correct": false
      },
      {
        "text": "300–400 beats per minute",
        "correct": false
      }
    ],
    "explanation": "Cats have a higher resting heart rate (140-220 bpm) compared to dogs (70-160 bpm, varying by size). Small breed dogs and puppies trend toward the higher end, while giant breeds trend lower.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.3",
    "category": "Medical Nursing & Patient Care",
    "question": "On the 1–9 Body Condition Score (BCS) scale, what score represents an ideal body condition?",
    "answers": [
      {
        "text": "4–5 (with 5 being ideal)",
        "correct": true
      },
      {
        "text": "1 (underweight is ideal)",
        "correct": false
      },
      {
        "text": "7 (slightly overweight is considered healthy)",
        "correct": false
      },
      {
        "text": "9 (maximum body condition)",
        "correct": false
      }
    ],
    "explanation": "On the 1-9 BCS scale (WSAVA/Purina), 4-5 is ideal. The ribs should be easily palpable with slight fat covering, there should be a visible waist from above, and an abdominal tuck from the side. A score of 1 = emaciated, 9 = morbidly obese.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.4",
    "category": "Medical Nursing & Patient Care",
    "question": "IV catheters in dogs and cats should generally be replaced or reassessed every:",
    "answers": [
      {
        "text": "72 hours (some protocols allow up to 96 hours)",
        "correct": true
      },
      {
        "text": "24 hours",
        "correct": false
      },
      {
        "text": "7 days",
        "correct": false
      },
      {
        "text": "They never need replacement if the site looks clean",
        "correct": false
      }
    ],
    "explanation": "Standard of care is to replace peripheral IV catheters every 72-96 hours to reduce the risk of phlebitis, thrombosis, and catheter-related infection. The site should be inspected every 4-6 hours for swelling, heat, redness, pain, or discharge.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.5",
    "category": "Medical Nursing & Patient Care",
    "question": "What gauge IV catheter is most appropriate for a 4 kg cat?",
    "answers": [
      {
        "text": "22 gauge",
        "correct": true
      },
      {
        "text": "14 gauge (this is appropriate for a large dog needing rapid fluid delivery)",
        "correct": false
      },
      {
        "text": "18 gauge (typically too large for most cats)",
        "correct": false
      },
      {
        "text": "8 gauge (this size does not exist for peripheral IV catheters)",
        "correct": false
      }
    ],
    "explanation": "Cats and small dogs typically receive 22-24 gauge catheters due to their small vein size. Medium dogs use 20 gauge, large dogs use 18-20 gauge. Always use the smallest gauge appropriate for the clinical need to minimize vessel trauma.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.6",
    "category": "Medical Nursing & Patient Care",
    "question": "What solution should be used to flush a peripheral IV catheter to maintain patency?",
    "answers": [
      {
        "text": "Sterile 0.9% saline (normal saline), 1–3 mL",
        "correct": true
      },
      {
        "text": "Sterile water for injection",
        "correct": false
      },
      {
        "text": "Lactated Ringer's solution straight from the fluid bag",
        "correct": false
      },
      {
        "text": "Heparinized saline at full anticoagulant doses",
        "correct": false
      }
    ],
    "explanation": "Sterile 0.9% NaCl is the standard flush solution. Sterile water is hypotonic and can cause hemolysis. While dilute heparin saline was historically used, recent evidence supports plain saline as equally effective for maintaining patency. Flush every 6-8 hours if the catheter is not in continuous use.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.7",
    "category": "Medical Nursing & Patient Care",
    "question": "The Glasgow Composite Measure Pain Scale - Short Form (CMPS-SF) is validated for use in:",
    "answers": [
      {
        "text": "Dogs — it assesses acute pain through behavioral observations",
        "correct": true
      },
      {
        "text": "Cats — it uses the Feline Grimace Scale",
        "correct": false
      },
      {
        "text": "Horses only",
        "correct": false
      },
      {
        "text": "All mammalian species equally",
        "correct": false
      }
    ],
    "explanation": "The Glasgow CMPS-SF was specifically developed and validated for dogs. It evaluates vocalization, attention to wound, mobility, response to touch, demeanor, and posture. Scores ≥6/24 (or ≥5/20 without mobility) indicate the patient likely needs additional analgesia. For cats, the Feline Grimace Scale is used.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.8",
    "category": "Medical Nursing & Patient Care",
    "question": "The Feline Grimace Scale assesses pain in cats by evaluating:",
    "answers": [
      {
        "text": "Five facial action units: ear position, orbital tightening, muzzle tension, whisker position, and head position",
        "correct": true
      },
      {
        "text": "Vocalization volume and frequency only",
        "correct": false
      },
      {
        "text": "Heart rate and respiratory rate only",
        "correct": false
      },
      {
        "text": "Appetite and litter box usage only",
        "correct": false
      }
    ],
    "explanation": "The Feline Grimace Scale scores 5 facial action units (0-2 each, max 10). A score ≥4/10 suggests the cat needs analgesic intervention. It is based on subtle facial changes and requires training to use effectively but is a validated, practical tool.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.9",
    "category": "Medical Nursing & Patient Care",
    "question": "Normal capillary refill time (CRT) in a dog or cat is:",
    "answers": [
      {
        "text": "Less than 2 seconds",
        "correct": true
      },
      {
        "text": "4–5 seconds",
        "correct": false
      },
      {
        "text": "Less than 0.5 seconds (flash refill indicates vasodilation)",
        "correct": false
      },
      {
        "text": "10 seconds",
        "correct": false
      }
    ],
    "explanation": "Normal CRT is <2 seconds when tested by pressing on the gingival mucosa. Prolonged CRT (>2 seconds) suggests poor perfusion (dehydration, shock, cardiovascular disease). A \"flash\" CRT (<1 second) can indicate vasodilation or early distributive shock.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q10.10",
    "category": "Medical Nursing & Patient Care",
    "question": "Normal mucous membrane color in a healthy dog or cat is:",
    "answers": [
      {
        "text": "Pink (salmon pink)",
        "correct": true
      },
      {
        "text": "White/pale (indicates anemia or poor perfusion)",
        "correct": false
      },
      {
        "text": "Brick red/injected (indicates toxemia, sepsis, or heat stroke)",
        "correct": false
      },
      {
        "text": "Blue/cyanotic (indicates severe hypoxemia)",
        "correct": false
      }
    ],
    "explanation": "Healthy mucous membranes are pink. Pale = anemia or vasoconstriction. Brick red = vasodilation (early shock, sepsis, heat stroke). Yellow (icteric) = liver disease or hemolysis. Blue (cyanotic) = severe hypoxemia. Muddy/gray = poor perfusion and imminent decompensation.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.1",
    "category": "Communication & Client Education",
    "question": "When providing post-dental discharge instructions to a client, which of the following should be included?",
    "answers": [
      {
        "text": "Feed soft food for 7-14 days, monitor for excessive bleeding or swelling, administer prescribed pain medication, and schedule a recheck if extractions were performed",
        "correct": true
      },
      {
        "text": "Resume regular hard kibble and chew toys immediately",
        "correct": false
      },
      {
        "text": "Brush the teeth vigorously that same evening to remove remaining plaque",
        "correct": false
      },
      {
        "text": "No follow-up care is needed after dental procedures",
        "correct": false
      }
    ],
    "explanation": "Post-dental care includes soft food to protect healing extraction sites, pain management, monitoring for complications (bleeding, swelling, inappetence), and withholding hard chew toys. Clients should be given written discharge instructions and a recheck appointment if indicated.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.2",
    "category": "Communication & Client Education",
    "question": "When a client asks, \"What does it mean that my dog's bloodwork shows elevated liver values?\", the most appropriate vet tech response is:",
    "answers": [
      {
        "text": "\"Elevated liver values can indicate that the liver is stressed or inflamed. Dr. [Vet] will discuss the specific results, what they might mean for [pet name], and recommend any next steps.\"",
        "correct": true
      },
      {
        "text": "\"Your dog has liver failure and will need a liver transplant.\"",
        "correct": false
      },
      {
        "text": "\"I'm not allowed to talk about test results at all — you'll have to wait for the doctor.\"",
        "correct": false
      },
      {
        "text": "\"Don't worry about it. Liver values go up all the time. It's nothing.\"",
        "correct": false
      }
    ],
    "explanation": "Vet techs should provide general, accurate information within their scope without making diagnoses. Referring to the veterinarian for specific interpretation and treatment planning is appropriate. Dismissing concerns or making dramatic diagnoses are both inappropriate.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.3",
    "category": "Communication & Client Education",
    "question": "During a euthanasia appointment, a key role of the veterinary technician is to:",
    "answers": [
      {
        "text": "Provide emotional support to the client, explain what to expect during the process, ensure a calm and private environment, and assist the veterinarian with the procedure",
        "correct": true
      },
      {
        "text": "Discourage the client from being present during the procedure",
        "correct": false
      },
      {
        "text": "Rush the process to minimize the clinic's emotional burden",
        "correct": false
      },
      {
        "text": "Avoid discussing the procedure to prevent upsetting the client",
        "correct": false
      }
    ],
    "explanation": "Vet techs play a crucial supportive role during euthanasia: preparing a comfortable space, explaining the process (sedation, injection, possible reflexes), providing tissues and time, answering questions, and supporting grieving clients. Many practices also provide aftercare information and grief resources.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.4",
    "category": "Communication & Client Education",
    "question": "A client calls to say their indoor cat just ate part of a lily plant. The vet tech should:",
    "answers": [
      {
        "text": "Advise the client to bring the cat in immediately — lily ingestion is a life-threatening emergency in cats",
        "correct": true
      },
      {
        "text": "Tell the client to monitor at home for 48 hours and call back if symptoms develop",
        "correct": false
      },
      {
        "text": "Recommend inducing vomiting at home with hydrogen peroxide",
        "correct": false
      },
      {
        "text": "Reassure the client that lilies are only mildly toxic and the cat will be fine",
        "correct": false
      }
    ],
    "explanation": "Lily toxicity in cats is a TRUE EMERGENCY. Any exposure (ingestion of petals, leaves, pollen, or even vase water) can cause fatal acute kidney injury. Immediate veterinary care with aggressive IV fluids and decontamination is essential. Waiting for symptoms dramatically worsens prognosis.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.5",
    "category": "Communication & Client Education",
    "question": "When discharging a patient after surgery, written discharge instructions should include:",
    "answers": [
      {
        "text": "Activity restrictions, medication instructions, incision monitoring, feeding guidelines, signs of complications to watch for, and when to return for recheck/suture removal",
        "correct": true
      },
      {
        "text": "Only the date for suture removal — no other information is needed",
        "correct": false
      },
      {
        "text": "A verbal summary only — written instructions are unnecessary",
        "correct": false
      },
      {
        "text": "Instructions to let the pet lick the incision as this promotes healing",
        "correct": false
      }
    ],
    "explanation": "Comprehensive written discharge instructions ensure client compliance and improve patient outcomes. They should cover exercise restriction, E-collar use, medication details (drug, dose, frequency, duration), incision care, diet modifications, and emergency contact information.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q11.6",
    "category": "Communication & Client Education",
    "question": "A client reports that their dog is drinking and urinating much more than usual. The medical terms for these findings are:",
    "answers": [
      {
        "text": "Polydipsia (excessive drinking) and polyuria (excessive urination)",
        "correct": true
      },
      {
        "text": "Anuria (no urination) and adipsia (no drinking)",
        "correct": false
      },
      {
        "text": "Oliguria (reduced urination) and bradypnea (slow breathing)",
        "correct": false
      },
      {
        "text": "Dysphagia (difficulty swallowing) and dysuria (painful urination)",
        "correct": false
      }
    ],
    "explanation": "Polydipsia/polyuria (PD/PU) is one of the most common owner complaints and can indicate diabetes mellitus, kidney disease, Cushing's disease, hyperthyroidism (cats), pyometra, or other conditions. Accurately using medical terminology helps communicate efficiently with the veterinary team.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.1",
    "category": "Veterinary Medical Terminology",
    "question": "The suffix \"-ectomy\" means:",
    "answers": [
      {
        "text": "Surgical removal/excision",
        "correct": true
      },
      {
        "text": "Inflammation",
        "correct": false
      },
      {
        "text": "Surgical repair",
        "correct": false
      },
      {
        "text": "Visual examination",
        "correct": false
      }
    ],
    "explanation": "-ectomy = removal (e.g., ovariohysterectomy = removal of ovaries and uterus, splenectomy = removal of spleen). Compare with: -itis = inflammation, -plasty = surgical repair, -scopy = visual examination.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.2",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"bradycardia\" means:",
    "answers": [
      {
        "text": "Abnormally slow heart rate",
        "correct": true
      },
      {
        "text": "Abnormally fast heart rate (that would be tachycardia)",
        "correct": false
      },
      {
        "text": "Irregular heart rhythm",
        "correct": false
      },
      {
        "text": "Absence of heartbeat",
        "correct": false
      }
    ],
    "explanation": "Brady- = slow, -cardia = heart. Bradycardia = slow heart rate. Tachy- = fast (tachycardia). Dys- = abnormal/difficult. A- = without (asystole = no cardiac electrical activity).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.3",
    "category": "Veterinary Medical Terminology",
    "question": "The directional term \"caudal\" means:",
    "answers": [
      {
        "text": "Toward the tail",
        "correct": true
      },
      {
        "text": "Toward the head (that would be cranial)",
        "correct": false
      },
      {
        "text": "Toward the belly (that would be ventral)",
        "correct": false
      },
      {
        "text": "Toward the spine (that would be dorsal)",
        "correct": false
      }
    ],
    "explanation": "Caudal = toward the tail. Cranial = toward the head. Dorsal = toward the back/spine. Ventral = toward the belly. These directional terms are used throughout the body except on the head (where rostral replaces cranial) and below the carpus/tarsus (where palmar/plantar/dorsal are used).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.4",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"rostral\" means:",
    "answers": [
      {
        "text": "Toward the nose — used specifically on the head",
        "correct": true
      },
      {
        "text": "Toward the tail",
        "correct": false
      },
      {
        "text": "Toward the spine",
        "correct": false
      },
      {
        "text": "Away from the midline",
        "correct": false
      }
    ],
    "explanation": "Rostral is used instead of \"cranial\" when describing directions on the head itself. Since the entire head is already the \"cranial\" part of the body, \"rostral\" specifies direction toward the nose/tip of the muzzle.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.5",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"proximal\" means:",
    "answers": [
      {
        "text": "Closer to the point of attachment or origin (toward the body)",
        "correct": true
      },
      {
        "text": "Farther from the point of attachment (that would be distal)",
        "correct": false
      },
      {
        "text": "On the surface of the skin",
        "correct": false
      },
      {
        "text": "Deep within the body",
        "correct": false
      }
    ],
    "explanation": "Proximal = closer to the body/point of attachment. Distal = farther away. These terms are primarily used for limbs and appendages. Example: The elbow is proximal to the carpus (wrist); the toes are the most distal part of the limb.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.6",
    "category": "Veterinary Medical Terminology",
    "question": "The abbreviation \"SID\" (or \"q24h\") on a prescription means:",
    "answers": [
      {
        "text": "Once daily",
        "correct": true
      },
      {
        "text": "Twice daily (that would be BID)",
        "correct": false
      },
      {
        "text": "Three times daily (that would be TID)",
        "correct": false
      },
      {
        "text": "Four times daily (that would be QID)",
        "correct": false
      }
    ],
    "explanation": "SID = semel in die (once daily), also written as q24h. BID = bis in die (twice daily/q12h). TID = ter in die (three times daily/q8h). QID = quater in die (four times daily/q6h). Note: SID is veterinary-specific; human medicine uses \"QD.\"",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.7",
    "category": "Veterinary Medical Terminology",
    "question": "The abbreviation \"PO\" on a prescription means:",
    "answers": [
      {
        "text": "Per os — by mouth (oral administration)",
        "correct": true
      },
      {
        "text": "Per oculum — applied to the eye",
        "correct": false
      },
      {
        "text": "Post-operative",
        "correct": false
      },
      {
        "text": "Physician's order",
        "correct": false
      }
    ],
    "explanation": "PO = per os = by mouth. This is one of the most common prescription abbreviations. Other routes: SQ/SC = subcutaneous, IM = intramuscular, IV = intravenous, IN = intranasal, PR = per rectum.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.8",
    "category": "Veterinary Medical Terminology",
    "question": "The medical term for \"inflammation of the liver\" is:",
    "answers": [
      {
        "text": "Hepatitis (hepat/o = liver, -itis = inflammation)",
        "correct": true
      },
      {
        "text": "Nephritis (nephr/o = kidney)",
        "correct": false
      },
      {
        "text": "Hepatoma (hepat/o = liver, -oma = tumor)",
        "correct": false
      },
      {
        "text": "Gastritis (gastr/o = stomach)",
        "correct": false
      }
    ],
    "explanation": "Combining the root \"hepat/o\" (liver) with the suffix \"-itis\" (inflammation) gives \"hepatitis.\" This follows the standard medical terminology construction pattern: root + suffix.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.9",
    "category": "Veterinary Medical Terminology",
    "question": "The medical term for \"condition of low blood sugar\" is:",
    "answers": [
      {
        "text": "Hypoglycemia (hypo- = low, glyc/o = sugar, -emia = blood condition)",
        "correct": true
      },
      {
        "text": "Hyperglycemia (hyper- = high)",
        "correct": false
      },
      {
        "text": "Hypocalcemia (calc/o = calcium)",
        "correct": false
      },
      {
        "text": "Glycosuria (glyc/o = sugar, -uria = in the urine)",
        "correct": false
      }
    ],
    "explanation": "Breaking down: hypo- (below/low) + glyc/o (sugar/glucose) + -emia (blood condition) = low blood sugar. Hyperglycemia would be high blood sugar. Glycosuria = sugar in the urine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.10",
    "category": "Veterinary Medical Terminology",
    "question": "The abbreviation \"OD\" refers to:",
    "answers": [
      {
        "text": "Right eye (oculus dexter)",
        "correct": true
      },
      {
        "text": "Left eye (that would be OS — oculus sinister)",
        "correct": false
      },
      {
        "text": "Both eyes (that would be OU — oculus uterque)",
        "correct": false
      },
      {
        "text": "Overdose",
        "correct": false
      }
    ],
    "explanation": "OD = right eye (oculus dexter), OS = left eye (oculus sinister), OU = both eyes (oculus uterque). Similarly for ears: AD = right ear, AS = left ear, AU = both ears. Note: Some practices are moving toward writing \"right eye\" to avoid confusion.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.11",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"dyspnea\" means:",
    "answers": [
      {
        "text": "Difficult or labored breathing",
        "correct": true
      },
      {
        "text": "Absence of breathing (that would be apnea)",
        "correct": false
      },
      {
        "text": "Rapid breathing (that would be tachypnea)",
        "correct": false
      },
      {
        "text": "Painful urination (that would be dysuria)",
        "correct": false
      }
    ],
    "explanation": "Dys- = difficult/painful, -pnea = breathing. Dyspnea = difficult breathing. A- = without (apnea). Tachy- = fast (tachypnea). Brady- = slow (bradypnea).",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.12",
    "category": "Veterinary Medical Terminology",
    "question": "The root word \"nephr/o\" refers to which organ?",
    "answers": [
      {
        "text": "Kidney",
        "correct": true
      },
      {
        "text": "Liver (that would be hepat/o)",
        "correct": false
      },
      {
        "text": "Lung (that would be pneum/o or pulmon/o)",
        "correct": false
      },
      {
        "text": "Heart (that would be cardi/o)",
        "correct": false
      }
    ],
    "explanation": "Nephr/o = kidney (nephritis = kidney inflammation, nephrectomy = kidney removal). Also note: ren/o is another root for kidney (renal = pertaining to the kidney). Both roots are commonly used in veterinary medicine.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.13",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"lateral\" means:",
    "answers": [
      {
        "text": "Away from the midline of the body",
        "correct": true
      },
      {
        "text": "Toward the midline (that would be medial)",
        "correct": false
      },
      {
        "text": "Toward the head (that would be cranial)",
        "correct": false
      },
      {
        "text": "Toward the ground/bottom surface (that would be ventral)",
        "correct": false
      }
    ],
    "explanation": "Lateral = away from the midline (to the side). Medial = toward the midline. These terms are fundamental to describing anatomical locations, radiographic positioning, and surgical approaches.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.14",
    "category": "Veterinary Medical Terminology",
    "question": "The combining form \"oste/o\" refers to:",
    "answers": [
      {
        "text": "Bone",
        "correct": true
      },
      {
        "text": "Joint (that would be arthr/o)",
        "correct": false
      },
      {
        "text": "Muscle (that would be my/o)",
        "correct": false
      },
      {
        "text": "Cartilage (that would be chondr/o)",
        "correct": false
      }
    ],
    "explanation": "Oste/o = bone. Examples: osteoarthritis (bone + joint inflammation), osteosarcoma (bone tumor), osteotomy (cutting bone). Arthr/o = joint, my/o = muscle, chondr/o = cartilage.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q12.15",
    "category": "Veterinary Medical Terminology",
    "question": "The suffix \"-oma\" means:",
    "answers": [
      {
        "text": "Tumor or mass",
        "correct": true
      },
      {
        "text": "Inflammation (that would be -itis)",
        "correct": false
      },
      {
        "text": "Pain (that would be -algia)",
        "correct": false
      },
      {
        "text": "Surgical repair (that would be -plasty)",
        "correct": false
      }
    ],
    "explanation": "-oma = tumor/mass. Examples: lipoma (fatty tumor), melanoma (melanocyte tumor), osteosarcoma (malignant bone tumor), lymphoma (lymphoid tissue tumor). Not all -omas are malignant — a lipoma is benign.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.1",
    "category": "Bonus High-Yield Questions",
    "question": "What is the normal respiratory rate for a resting dog?",
    "answers": [
      {
        "text": "10–30 breaths per minute",
        "correct": true
      },
      {
        "text": "40–60 breaths per minute",
        "correct": false
      },
      {
        "text": "5–8 breaths per minute",
        "correct": false
      },
      {
        "text": "80–100 breaths per minute",
        "correct": false
      }
    ],
    "explanation": "Normal canine respiratory rate at rest is 10-30 breaths/min. Panting is NOT counted as a respiratory rate. Cats are similar at 20-30 breaths/min. Rates above 40/min at rest are generally considered abnormal.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.2",
    "category": "Bonus High-Yield Questions",
    "question": "Which of the following is the correct order of triage priority (highest to lowest)?",
    "answers": [
      {
        "text": "Respiratory distress/arrest → hemorrhage/shock → neurological emergency → fractures → lacerations → stable chronic conditions",
        "correct": true
      },
      {
        "text": "Lacerations → fractures → respiratory distress → shock",
        "correct": false
      },
      {
        "text": "Chronic conditions → neurological → respiratory → hemorrhage",
        "correct": false
      },
      {
        "text": "All emergencies are treated in the order they arrive",
        "correct": false
      }
    ],
    "explanation": "Triage prioritizes life-threatening conditions first: airway/breathing compromises, followed by circulatory emergencies (hemorrhage, shock), then neurological emergencies (seizures, head trauma), then orthopedic and soft tissue injuries, and finally stable patients.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.3",
    "category": "Bonus High-Yield Questions",
    "question": "A 60 mL/hr fluid rate using a 15 drops/mL administration set equals how many drops per second?",
    "answers": [
      {
        "text": "Approximately 1 drop every 4 seconds (15 drops/minute)",
        "correct": true
      },
      {
        "text": "1 drop per second",
        "correct": false
      },
      {
        "text": "4 drops per second",
        "correct": false
      },
      {
        "text": "60 drops per second",
        "correct": false
      }
    ],
    "explanation": "Drip rate = (Volume per hour × drip set factor) ÷ 60 min = (60 mL × 15 gtt/mL) ÷ 60 min = 900 ÷ 60 = 15 drops/min = 1 drop every 4 seconds. The drip set factor (gtt/mL) varies: macrodrip = 10 or 15 gtt/mL, microdrip = 60 gtt/mL.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.4",
    "category": "Bonus High-Yield Questions",
    "question": "Acepromazine should be avoided or used with extreme caution in which situation?",
    "answers": [
      {
        "text": "In patients with seizure history — it lowers the seizure threshold",
        "correct": true
      },
      {
        "text": "In patients with pain — it has strong analgesic properties (it does NOT; it is only a tranquilizer)",
        "correct": false
      },
      {
        "text": "In healthy young dogs for routine sedation — it is always contraindicated",
        "correct": false
      },
      {
        "text": "In combination with any opioid — the drugs are always incompatible",
        "correct": false
      }
    ],
    "explanation": "Acepromazine is a phenothiazine tranquilizer that lowers the seizure threshold, causes hypotension (caution in compromised patients), and has NO analgesic properties. It should be avoided in seizure patients, boxers (breed sensitivity), and patients in shock.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.5",
    "category": "Bonus High-Yield Questions",
    "question": "What type of fluid is Lactated Ringer's Solution (LRS)?",
    "answers": [
      {
        "text": "Isotonic, balanced crystalloid solution",
        "correct": true
      },
      {
        "text": "Colloid solution",
        "correct": false
      },
      {
        "text": "Hypertonic saline",
        "correct": false
      },
      {
        "text": "Hypotonic dextrose solution",
        "correct": false
      }
    ],
    "explanation": "LRS is an isotonic, balanced electrolyte crystalloid solution used as the most common general-purpose IV fluid in veterinary medicine. It contains sodium, potassium, calcium, chloride, and lactate (as a buffer). It is appropriate for replacement and maintenance fluid therapy.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.6",
    "category": "Bonus High-Yield Questions",
    "question": "The \"recumbent side\" in a lateral radiograph always refers to:",
    "answers": [
      {
        "text": "The side DOWN (closest to the table/cassette)",
        "correct": true
      },
      {
        "text": "The side UP (farthest from the table)",
        "correct": false
      },
      {
        "text": "The side the X-ray beam enters",
        "correct": false
      },
      {
        "text": "The patient's left side regardless of position",
        "correct": false
      }
    ],
    "explanation": "In veterinary radiology, \"right lateral\" means the right side is down (against the table/cassette). The beam enters from the side that is UP and exits through the down side to hit the detector. This naming convention is consistent and must be recorded accurately.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.7",
    "category": "Bonus High-Yield Questions",
    "question": "What is the purpose of performing a pre-anesthetic blood panel?",
    "answers": [
      {
        "text": "To identify underlying organ dysfunction (hepatic, renal) or abnormalities (anemia, clotting issues) that could affect anesthetic safety and drug metabolism",
        "correct": true
      },
      {
        "text": "To determine the animal's vaccination status",
        "correct": false
      },
      {
        "text": "To screen for heartworm disease before surgery",
        "correct": false
      },
      {
        "text": "To confirm the animal's breed and age",
        "correct": false
      }
    ],
    "explanation": "Pre-anesthetic bloodwork (minimum: PCV/TP, BUN, ALT/ALP, glucose; ideally a full CBC and chemistry) identifies conditions that may increase anesthetic risk or require protocol adjustments. Kidney and liver values are especially important since these organs metabolize/excrete most anesthetic drugs.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "QB.8",
    "category": "Bonus High-Yield Questions",
    "question": "A drop of blood on a slide mixed with anti-A serum causes agglutination. A separate drop mixed with anti-B serum does NOT agglutinate. This cat is blood type:",
    "answers": [
      {
        "text": "Type A",
        "correct": true
      },
      {
        "text": "Type B",
        "correct": false
      },
      {
        "text": "Type AB",
        "correct": false
      },
      {
        "text": "The test is inconclusive",
        "correct": false
      }
    ],
    "explanation": "If the blood agglutinates with anti-A serum (has A antigen) but NOT with anti-B serum (no B antigen), the cat is Type A. Type B would show the opposite pattern. Type AB would agglutinate with BOTH sera.",
    "sources": [
      {
        "name": "Standard veterinary technician education references (e.g., McCurnin's Clinical Textbook, Plumb's Veterinary Drug Handbook, Merck Veterinary Manual)"
      }
    ],
    "sourceInferred": true
  },
  {
    "id": "Q1.13",
    "category": "Dental Procedures",
    "question": "The infraorbital nerve block in a dog desensitizes which teeth?",
    "answers": [
      {
        "text": "Ipsilateral upper incisors, canine, and first three premolars",
        "correct": true
      },
      {
        "text": "All mandibular teeth on that side",
        "correct": false
      },
      {
        "text": "Only the upper fourth premolar and molars",
        "correct": false
      },
      {
        "text": "Both upper and lower canines bilaterally",
        "correct": false
      }
    ],
    "explanation": "The infraorbital nerve block targets the infraorbital foramen (dorsal to the maxillary PM3) and blocks sensation to the ipsilateral maxillary incisors, canine, and first three premolars, plus surrounding soft tissue of the rostral maxilla.",
    "sources": [
      {
        "name": "AVDC",
        "url": "https://avdc.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.14",
    "category": "Dental Procedures",
    "question": "The inferior alveolar (mandibular) nerve block desensitizes:",
    "answers": [
      {
        "text": "All teeth on the injected side of the mandible (lower jaw), plus adjacent soft tissue",
        "correct": true
      },
      {
        "text": "Only the lower incisors",
        "correct": false
      },
      {
        "text": "Upper premolars and molars on that side",
        "correct": false
      },
      {
        "text": "The tongue bilaterally",
        "correct": false
      }
    ],
    "explanation": "The inferior alveolar nerve enters the mandibular foramen on the medial aspect of the ramus. Blocking it provides analgesia to all ipsilateral mandibular teeth (incisors through molars) and surrounding bone and soft tissue.",
    "sources": [
      {
        "name": "Veterinary Dentistry: Principles & Practice (Wiggs & Lobprise) — AVDC guidelines",
        "url": "https://avdc.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.15",
    "category": "Dental Procedures",
    "question": "Periodontal disease Stage 3 (moderate periodontitis) is characterized by:",
    "answers": [
      {
        "text": "25–50% attachment loss and bone loss on dental radiographs",
        "correct": true
      },
      {
        "text": "Gingivitis only with no attachment loss",
        "correct": false
      },
      {
        "text": "Less than 25% bone loss",
        "correct": false
      },
      {
        "text": "Greater than 50% bone loss with tooth loss",
        "correct": false
      }
    ],
    "explanation": "The AVDC classifies periodontal disease into 4 stages: Stage 1 = gingivitis only (0% bone loss), Stage 2 = early periodontitis (<25% loss), Stage 3 = moderate periodontitis (25-50% loss), Stage 4 = advanced periodontitis (>50% loss).",
    "sources": [
      {
        "name": "American Veterinary Dental College (AVDC)",
        "url": "https://avdc.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.16",
    "category": "Dental Procedures",
    "question": "Feline tooth resorption Type 2 is radiographically characterized by:",
    "answers": [
      {
        "text": "Loss of the periodontal ligament space with roots appearing to merge into surrounding bone (replacement resorption)",
        "correct": true
      },
      {
        "text": "Focal radiolucencies with an intact periodontal ligament space",
        "correct": false
      },
      {
        "text": "Normal root structure with a visible pulp canal",
        "correct": false
      },
      {
        "text": "External root resorption caused by orthodontic pressure",
        "correct": false
      }
    ],
    "explanation": "Type 2 tooth resorption shows replacement of root structure by bone (ankylosis), with loss of the normal periodontal ligament space. Type 1, by contrast, shows focal radiolucencies with preserved PDL space and is associated with inflammation.",
    "sources": [
      {
        "name": "American Veterinary Dental College (AVDC) Nomenclature",
        "url": "https://avdc.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.17",
    "category": "Dental Procedures",
    "question": "Which ultrasonic scaler type uses a stack of thin metal strips (laminations) that expand and contract in a magnetic field to generate vibration?",
    "answers": [
      {
        "text": "Magnetostrictive scaler",
        "correct": true
      },
      {
        "text": "Piezoelectric scaler",
        "correct": false
      },
      {
        "text": "Sonic scaler (air-driven)",
        "correct": false
      },
      {
        "text": "Rotary scaler",
        "correct": false
      }
    ],
    "explanation": "Magnetostrictive scalers use a stack of metal strips (or a ferrite rod) that expand and contract in a magnetic field, creating an elliptical tip motion. Piezoelectric scalers use crystal deformation to create linear tip motion. Both require constant water cooling.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed. (Bassert & Thomas)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.18",
    "category": "Dental Procedures",
    "question": "A piezoelectric ultrasonic scaler tip moves in which pattern?",
    "answers": [
      {
        "text": "Linear (back-and-forth), with only the lateral surfaces active",
        "correct": true
      },
      {
        "text": "Elliptical, with all surfaces of the tip active",
        "correct": false
      },
      {
        "text": "Rotary, like a dental bur",
        "correct": false
      },
      {
        "text": "Random vibration with no predictable pattern",
        "correct": false
      }
    ],
    "explanation": "Piezoelectric scalers produce a linear tip movement, meaning only the lateral surfaces are active for scaling. Magnetostrictive scalers produce an elliptical pattern, making all surfaces of the tip potentially active. Understanding tip movement helps prevent tooth damage.",
    "sources": [
      {
        "name": "Veterinary Dentistry for the Technician and Office Staff (Holmstrom)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.19",
    "category": "Dental Procedures",
    "question": "For subgingival scaling, which hand instrument is most appropriate?",
    "answers": [
      {
        "text": "A Gracey or universal curette",
        "correct": true
      },
      {
        "text": "A sickle scaler",
        "correct": false
      },
      {
        "text": "A dental elevator",
        "correct": false
      },
      {
        "text": "An extraction forceps",
        "correct": false
      }
    ],
    "explanation": "Curettes (Gracey or universal) have a rounded toe and back, making them safe for use subgingivally without traumatizing the soft tissue of the sulcus. Sickle scalers have a pointed tip and are only for supragingival use — their sharp point can lacerate gingival tissue.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.20",
    "category": "Dental Procedures",
    "question": "What is the recommended polishing time per tooth to avoid thermal damage?",
    "answers": [
      {
        "text": "No more than 5 seconds per tooth at a time",
        "correct": true
      },
      {
        "text": "30 seconds per tooth minimum",
        "correct": false
      },
      {
        "text": "2 minutes per tooth",
        "correct": false
      },
      {
        "text": "Time doesn't matter as long as paste is applied",
        "correct": false
      }
    ],
    "explanation": "Prolonged polishing generates frictional heat that can damage the pulp. The standard recommendation is no more than 5 seconds of continuous contact per tooth, using light pressure and a slow-speed handpiece with prophy paste.",
    "sources": [
      {
        "name": "Veterinary Dentistry for the Technician and Office Staff (Holmstrom)"
      },
      {
        "name": "AVDC recommendations"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.21",
    "category": "Dental Procedures",
    "question": "On a dental radiograph, what does a \"periapical lucency\" (dark area around the root tip) most likely indicate?",
    "answers": [
      {
        "text": "An abscess or infection at the root apex",
        "correct": true
      },
      {
        "text": "Normal healthy bone",
        "correct": false
      },
      {
        "text": "A supernumerary (extra) tooth",
        "correct": false
      },
      {
        "text": "Calculus accumulation",
        "correct": false
      }
    ],
    "explanation": "A periapical lucency (radiolucent halo around the root tip) indicates bone loss due to infection/inflammation from a non-vital (dead) tooth. This finding typically necessitates extraction or root canal therapy.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.22",
    "category": "Dental Procedures",
    "question": "What home care product does the Veterinary Oral Health Council (VOHC) evaluate and certify?",
    "answers": [
      {
        "text": "Dental chews, treats, diets, and water additives that have demonstrated plaque/calculus reduction in controlled trials",
        "correct": true
      },
      {
        "text": "Toothbrush brands only",
        "correct": false
      },
      {
        "text": "Anesthetic dental cleaning products",
        "correct": false
      },
      {
        "text": "Prescription antibiotics for periodontal disease",
        "correct": false
      }
    ],
    "explanation": "The VOHC awards a seal of acceptance to products that meet pre-set standards for reducing plaque or calculus accumulation based on controlled clinical trials. This includes dental chews, therapeutic diets, water additives, and other oral hygiene products.",
    "sources": [
      {
        "name": "Veterinary Oral Health Council",
        "url": "http://www.vohc.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q1.23",
    "category": "Dental Procedures",
    "question": "The mental nerve block in a dog provides analgesia to:",
    "answers": [
      {
        "text": "Lower incisors, canines, and rostral mandibular soft tissue",
        "correct": true
      },
      {
        "text": "All mandibular teeth including molars",
        "correct": false
      },
      {
        "text": "Upper premolars and molars",
        "correct": false
      },
      {
        "text": "The hard palate",
        "correct": false
      }
    ],
    "explanation": "The mental nerve exits through the mental foramen (ventral to the lower PM2 region) and provides sensory innervation to the ipsilateral lower incisors, canine, and surrounding rostral chin tissue. For full mandibular analgesia, the inferior alveolar block is needed.",
    "sources": [
      {
        "name": "AVDC",
        "url": "https://avdc.org/"
      },
      {
        "name": "Small Animal Dental Procedures for Veterinary Technicians and Nurses (Byrne)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.13",
    "category": "Vaccine Administration",
    "question": "Purevax (Merial/Boehringer Ingelheim) feline rabies vaccine differs from traditional killed rabies vaccines in that it is:",
    "answers": [
      {
        "text": "A recombinant, non-adjuvanted vaccine using canarypox vector technology, reducing the risk of injection-site sarcoma",
        "correct": true
      },
      {
        "text": "A modified-live vaccine that can revert to virulence",
        "correct": false
      },
      {
        "text": "An adjuvanted killed vaccine with a 3-year duration of immunity",
        "correct": false
      },
      {
        "text": "An intranasal formulation that doesn't require injection",
        "correct": false
      }
    ],
    "explanation": "Purevax uses recombinant canarypox vector technology and contains no adjuvant. Adjuvants (especially aluminum-based) in killed vaccines have been associated with feline injection-site sarcomas (FISS). Purevax requires annual boosters due to its 1-year duration of immunity.",
    "sources": [
      {
        "name": "AAFP Vaccination Guidelines"
      },
      {
        "name": "Boehringer Ingelheim (Purevax product label)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.14",
    "category": "Vaccine Administration",
    "question": "The \"3-2-1 rule\" for feline injection-site sarcomas states that a mass should be biopsied if it:",
    "answers": [
      {
        "text": "Is still present 3 months post-injection, is larger than 2 cm in diameter, OR is increasing in size 1 month after injection",
        "correct": true
      },
      {
        "text": "Is present for 3 weeks, is 2 mm in size, and has been there for 1 day",
        "correct": false
      },
      {
        "text": "Disappears within 3 days, reappears within 2 weeks, and grows for 1 month",
        "correct": false
      },
      {
        "text": "Is located within 3 cm of the spine, is 2 years old, and is on 1 limb",
        "correct": false
      }
    ],
    "explanation": "The VAFSTF (Vaccine-Associated Feline Sarcoma Task Force) developed the 3-2-1 rule: biopsy any mass that persists ≥3 months post-vaccination, is ≥2 cm diameter, or is growing at 1 month post-vaccination. Early detection dramatically improves outcomes.",
    "sources": [
      {
        "name": "VAFSTF/AVMA",
        "url": "https://www.avma.org/resources-tools/avma-policies/vaccine-associated-feline-sarcoma-task-force-report"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.15",
    "category": "Vaccine Administration",
    "question": "All cats should be tested for Feline Leukemia Virus (FeLV) before their first FeLV vaccination because:",
    "answers": [
      {
        "text": "Vaccinating an already FeLV-positive cat provides no benefit and may give false assurance of protection",
        "correct": true
      },
      {
        "text": "The vaccine will cure existing FeLV infection if given early enough",
        "correct": false
      },
      {
        "text": "FeLV-positive cats will have a fatal reaction to the vaccine",
        "correct": false
      },
      {
        "text": "Testing is only needed for outdoor cats",
        "correct": false
      }
    ],
    "explanation": "AAFP guidelines recommend FeLV/FIV testing before initial vaccination. An already-infected cat won't benefit from vaccination, and the owner needs to know the cat's status for management decisions. The vaccine cannot treat existing infection.",
    "sources": [
      {
        "name": "AAFP Feline Retrovirus Testing and Management Guidelines",
        "url": "https://catvets.com/guidelines/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.16",
    "category": "Vaccine Administration",
    "question": "Vaccines should be stored at what temperature range to maintain efficacy (cold chain)?",
    "answers": [
      {
        "text": "2–8°C (35–46°F) — standard refrigerator temperature, never frozen unless label states otherwise",
        "correct": true
      },
      {
        "text": "Room temperature (20–25°C) is fine for all vaccines",
        "correct": false
      },
      {
        "text": "-20°C (freezer temperature) for all vaccines",
        "correct": false
      },
      {
        "text": "15–20°C (cool room temperature)",
        "correct": false
      }
    ],
    "explanation": "Most vaccines must be stored at 2-8°C. Freezing can destroy vaccine antigens and adjuvants. Exposure to temperatures above 8°C accelerates degradation. The cold chain must be maintained from manufacturer to patient.",
    "sources": [
      {
        "name": "AAHA Vaccination Guidelines 2022"
      },
      {
        "name": "WSAVA Vaccination Guidelines",
        "url": "https://wsava.org/global-guidelines/vaccination-guidelines/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.17",
    "category": "Vaccine Administration",
    "question": "After reconstituting a modified-live vaccine (e.g., mixing lyophilized cake with diluent), how quickly should it be administered?",
    "answers": [
      {
        "text": "Within 1 hour — modified-live vaccines degrade rapidly once reconstituted",
        "correct": true
      },
      {
        "text": "Within 24 hours",
        "correct": false
      },
      {
        "text": "Within 1 week if refrigerated",
        "correct": false
      },
      {
        "text": "There is no time limit once reconstituted",
        "correct": false
      }
    ],
    "explanation": "Modified-live vaccines contain attenuated organisms that begin to die once reconstituted. Most manufacturers recommend use within 1 hour. The vaccine should never be reconstituted until ready to administer.",
    "sources": [
      {
        "name": "AAHA Vaccination Guidelines 2022"
      },
      {
        "name": "vaccine manufacturer product inserts"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.18",
    "category": "Vaccine Administration",
    "question": "Nobivac Lepto4 protects against how many serovars of Leptospira?",
    "answers": [
      {
        "text": "Four serovars: Canicola, Icterohaemorrhagiae, Grippotyphosa, and Pomona",
        "correct": true
      },
      {
        "text": "Two serovars only",
        "correct": false
      },
      {
        "text": "All known serovars of Leptospira",
        "correct": false
      },
      {
        "text": "Only one serovar (Canicola)",
        "correct": false
      }
    ],
    "explanation": "Nobivac Lepto4 (MSD Animal Health) is a 4-serovar leptospirosis vaccine covering the most clinically relevant serovars in dogs. Leptospirosis vaccines require annual boosters as immunity wanes within approximately 12 months.",
    "sources": [
      {
        "name": "MSD Animal Health Nobivac product label"
      },
      {
        "name": "AAHA 2022 Canine Vaccination Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.19",
    "category": "Vaccine Administration",
    "question": "According to AAHA 2022 guidelines, after the initial puppy series, core vaccines (CDV, CPV, CAV) should be boosted:",
    "answers": [
      {
        "text": "At 1 year after the last puppy dose, then every 3 years thereafter",
        "correct": true
      },
      {
        "text": "Every 6 months for life",
        "correct": false
      },
      {
        "text": "Only once at 1 year, then never again",
        "correct": false
      },
      {
        "text": "Every year for life without exception",
        "correct": false
      }
    ],
    "explanation": "AAHA 2022 guidelines recommend a booster at 12 months after the final puppy series dose, then revaccination at intervals of 3 years or longer for core vaccines (CDV, CPV-2, CAV-2). Rabies is boosted per local law (often every 3 years).",
    "sources": [
      {
        "name": "AAHA 2022 Canine Vaccination Guidelines",
        "url": "https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/vaccination-canine/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.20",
    "category": "Vaccine Administration",
    "question": "A titer test measures:",
    "answers": [
      {
        "text": "The level of circulating antibodies against a specific pathogen, used to assess protective immunity without revaccinating",
        "correct": true
      },
      {
        "text": "The number of white blood cells in the blood",
        "correct": false
      },
      {
        "text": "The amount of vaccine antigen still present in the body",
        "correct": false
      },
      {
        "text": "Whether the animal has active infection",
        "correct": false
      }
    ],
    "explanation": "Serologic titer testing quantifies antibody levels (e.g., against CDV, CPV, CAV). A protective titer indicates adequate immunity, potentially allowing postponement of revaccination. It does not measure cell-mediated immunity.",
    "sources": [
      {
        "name": "AAHA 2022 Canine Vaccination Guidelines"
      },
      {
        "name": "WSAVA Vaccination Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.21",
    "category": "Vaccine Administration",
    "question": "Intranasal Bordetella vaccines may cause which common, self-limiting side effect?",
    "answers": [
      {
        "text": "Sneezing and mild nasal discharge for 1-3 days post-vaccination",
        "correct": true
      },
      {
        "text": "Severe anaphylaxis requiring epinephrine",
        "correct": false
      },
      {
        "text": "Permanent loss of smell",
        "correct": false
      },
      {
        "text": "Injection-site sarcoma",
        "correct": false
      }
    ],
    "explanation": "Intranasal Bordetella vaccines deliver modified-live organisms directly to the nasal mucosa. Mild transient sneezing and clear nasal discharge are common and self-limiting. Clients should be warned so they don't confuse this with illness.",
    "sources": [
      {
        "name": "AAHA 2022 Canine Vaccination Guidelines"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q2.22",
    "category": "Vaccine Administration",
    "question": "An anaphylactic vaccine reaction in a dog should be treated FIRST with:",
    "answers": [
      {
        "text": "Epinephrine (intramuscular or intravenous) at 0.01 mg/kg",
        "correct": true
      },
      {
        "text": "Oral diphenhydramine and observation for 24 hours",
        "correct": false
      },
      {
        "text": "A second dose of the same vaccine to \"desensitize\"",
        "correct": false
      },
      {
        "text": "Corticosteroids only (dexamethasone)",
        "correct": false
      }
    ],
    "explanation": "Epinephrine is the first-line treatment for anaphylaxis in any species. It reverses bronchospasm, supports blood pressure, and inhibits further mediator release. Antihistamines and corticosteroids are secondary treatments. IV fluids for hypotension are also critical.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "BSAVA Manual of Canine and Feline Emergency and Critical Care"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.13",
    "category": "Anesthesia & Monitoring",
    "question": "The MAC (Minimum Alveolar Concentration) of isoflurane in dogs is approximately:",
    "answers": [
      {
        "text": "1.3%",
        "correct": true
      },
      {
        "text": "0.5%",
        "correct": false
      },
      {
        "text": "2.3%",
        "correct": false
      },
      {
        "text": "5.0%",
        "correct": false
      }
    ],
    "explanation": "MAC is the concentration of inhaled anesthetic at 1 atmosphere that prevents movement in 50% of patients exposed to a supramaximal stimulus. Isoflurane MAC in dogs is ~1.3%, in cats ~1.6%. Sevoflurane MAC is higher: ~2.3% in dogs, ~2.6% in cats.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia and Analgesia, 5th Ed."
      },
      {
        "name": "Plumb's Veterinary Drug Handbook"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.14",
    "category": "Anesthesia & Monitoring",
    "question": "An ASA III patient is defined as:",
    "answers": [
      {
        "text": "A patient with severe systemic disease that limits activity but is not incapacitating",
        "correct": true
      },
      {
        "text": "A healthy patient with no systemic disease",
        "correct": false
      },
      {
        "text": "A patient with mild systemic disease that doesn't limit normal activity",
        "correct": false
      },
      {
        "text": "A moribund patient not expected to survive 24 hours",
        "correct": false
      }
    ],
    "explanation": "ASA I = healthy, ASA II = mild systemic disease, ASA III = severe systemic disease limiting activity (e.g., uncontrolled diabetes, significant anemia), ASA IV = severe disease that is a constant threat to life, ASA V = moribund. \"E\" is added for emergencies.",
    "sources": [
      {
        "name": "American Society of Anesthesiologists Physical Status Classification"
      },
      {
        "name": "Lumb & Jones' Veterinary Anesthesia"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.15",
    "category": "Anesthesia & Monitoring",
    "question": "For a brachycephalic dog (e.g., Bulldog, Pug) undergoing anesthesia, which premedication should be AVOIDED?",
    "answers": [
      {
        "text": "Acepromazine — it can worsen upper airway obstruction by relaxing pharyngeal muscles without providing analgesia",
        "correct": true
      },
      {
        "text": "Butorphanol — a mild opioid with minimal respiratory depression",
        "correct": false
      },
      {
        "text": "Maropitant — an antiemetic with no respiratory effects",
        "correct": false
      },
      {
        "text": "Glycopyrrolate — an anticholinergic that reduces secretions",
        "correct": false
      }
    ],
    "explanation": "Brachycephalic breeds have compromised upper airways. Acepromazine causes upper airway muscle relaxation and can worsen obstruction. Additionally, its long duration and lack of reversibility make it risky. Opioids with anticholinergics are often preferred.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia and Analgesia"
      },
      {
        "name": "BSAVA Manual of Canine and Feline Anaesthesia and Analgesia"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.16",
    "category": "Anesthesia & Monitoring",
    "question": "On capnography, a sudden drop in ETCO2 to near zero during anesthesia most likely indicates:",
    "answers": [
      {
        "text": "Esophageal intubation, ET tube disconnection, or cardiac arrest",
        "correct": true
      },
      {
        "text": "The patient is at an appropriate anesthetic depth",
        "correct": false
      },
      {
        "text": "The patient is hyperventilating",
        "correct": false
      },
      {
        "text": "The oxygen flow rate is too high",
        "correct": false
      }
    ],
    "explanation": "A sudden ETCO2 drop to near zero means CO2 is no longer being delivered to the sensor. This occurs with ET tube disconnection, esophageal intubation (no alveolar gas), or cardiac arrest (no pulmonary blood flow to deliver CO2). Immediate troubleshooting is required.",
    "sources": [
      {
        "name": "RECOVER CPR Guidelines"
      },
      {
        "name": "Lumb & Jones' Veterinary Anesthesia and Analgesia"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.17",
    "category": "Anesthesia & Monitoring",
    "question": "ETCO2 steadily rising above 55 mmHg during anesthesia indicates:",
    "answers": [
      {
        "text": "Hypoventilation — the patient needs assisted ventilation (manual or mechanical)",
        "correct": true
      },
      {
        "text": "The patient is too light and needs more anesthetic",
        "correct": false
      },
      {
        "text": "The oxygen tank is empty",
        "correct": false
      },
      {
        "text": "Normal variation during deep anesthesia",
        "correct": false
      }
    ],
    "explanation": "Elevated ETCO2 (>55 mmHg) indicates CO2 retention from inadequate ventilation. Treatment is to provide intermittent positive pressure ventilation (IPPV) — either manually bagging or using a mechanical ventilator — to increase minute ventilation and lower CO2.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia, 5th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.18",
    "category": "Anesthesia & Monitoring",
    "question": "During CPR, compressors should be rotated every:",
    "answers": [
      {
        "text": "2 minutes — to prevent fatigue and maintain compression quality",
        "correct": true
      },
      {
        "text": "10 minutes",
        "correct": false
      },
      {
        "text": "30 seconds",
        "correct": false
      },
      {
        "text": "Only when the current compressor asks to stop",
        "correct": false
      }
    ],
    "explanation": "RECOVER guidelines recommend rotating compressors every 2 minutes because fatigue significantly reduces compression depth and rate within 1-2 minutes, even when the compressor doesn't feel tired. Brief pauses for rhythm checks coincide with rotations.",
    "sources": [
      {
        "name": "RECOVER CPR Guidelines 2024",
        "url": "https://recoverinitiative.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.19",
    "category": "Anesthesia & Monitoring",
    "question": "For barrel-chested dogs (e.g., English Bulldogs), chest compressions during CPR should be performed with the patient in:",
    "answers": [
      {
        "text": "Dorsal recumbency, compressing the sternum directly",
        "correct": true
      },
      {
        "text": "Right lateral recumbency over the widest part of the chest",
        "correct": false
      },
      {
        "text": "Sternal recumbency with compressions on the dorsum",
        "correct": false
      },
      {
        "text": "Standing position",
        "correct": false
      }
    ],
    "explanation": "RECOVER guidelines specify that barrel-chested breeds benefit from dorsal recumbency with sternal compressions (cardiac pump mechanism). Keel-chested dogs are placed in lateral recumbency, and small dogs/cats receive compressions directly over the heart.",
    "sources": [
      {
        "name": "RECOVER CPR Guidelines",
        "url": "https://recoverinitiative.org/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.20",
    "category": "Anesthesia & Monitoring",
    "question": "A fentanyl CRI (constant rate infusion) is typically dosed at:",
    "answers": [
      {
        "text": "2–5 mcg/kg/hr (after a loading dose of 2–5 mcg/kg IV)",
        "correct": true
      },
      {
        "text": "50–100 mcg/kg/hr",
        "correct": false
      },
      {
        "text": "0.01 mcg/kg/hr",
        "correct": false
      },
      {
        "text": "1 mg/kg/hr",
        "correct": false
      }
    ],
    "explanation": "Fentanyl CRI provides excellent intraoperative and postoperative analgesia. A loading dose of 2-5 mcg/kg IV is given, followed by a CRI of 2-5 mcg/kg/hr. It allows reduction of inhalant anesthetic (MAC-sparing effect) and provides smooth analgesia.",
    "sources": [
      {
        "name": "Plumb's Veterinary Drug Handbook"
      },
      {
        "name": "Lumb & Jones' Veterinary Anesthesia"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.21",
    "category": "Anesthesia & Monitoring",
    "question": "The MAC-sparing effect of opioids means:",
    "answers": [
      {
        "text": "Opioids reduce the amount of inhalant anesthetic needed to maintain surgical depth, improving cardiovascular stability",
        "correct": true
      },
      {
        "text": "Opioids increase the MAC value, requiring more inhalant",
        "correct": false
      },
      {
        "text": "Opioids replace inhalant anesthetics completely",
        "correct": false
      },
      {
        "text": "MAC is unaffected by concurrent drug administration",
        "correct": false
      }
    ],
    "explanation": "Opioids, alpha-2 agonists, and other adjunctive drugs reduce MAC by 20-60%, meaning less isoflurane/sevoflurane is needed. This improves cardiovascular function since inhalants are dose-dependent cardiovascular depressants.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia and Analgesia, 5th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.22",
    "category": "Anesthesia & Monitoring",
    "question": "A geriatric patient (>8 years) requires which anesthetic consideration?",
    "answers": [
      {
        "text": "Reduced drug doses (often 25-50% less), pre-anesthetic bloodwork to assess organ function, and careful fluid support",
        "correct": true
      },
      {
        "text": "Higher doses of all drugs to overcome their slower metabolism",
        "correct": false
      },
      {
        "text": "No bloodwork is needed if the patient appears healthy",
        "correct": false
      },
      {
        "text": "Geriatric patients should never receive anesthesia",
        "correct": false
      }
    ],
    "explanation": "Geriatric patients often have reduced cardiac output, hepatic metabolism, and renal function. Drug doses should be reduced, organ function assessed pre-operatively, and temperature/fluid balance monitored carefully. They are not excluded from anesthesia but require extra care.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia"
      },
      {
        "name": "AAHA Senior Care Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q3.23",
    "category": "Anesthesia & Monitoring",
    "question": "Sevoflurane has what advantage over isoflurane for mask or chamber inductions?",
    "answers": [
      {
        "text": "Less pungent odor, causing less breath-holding and smoother inductions",
        "correct": true
      },
      {
        "text": "It is significantly cheaper than isoflurane",
        "correct": false
      },
      {
        "text": "It has a lower MAC value than isoflurane",
        "correct": false
      },
      {
        "text": "It provides better analgesia than isoflurane",
        "correct": false
      }
    ],
    "explanation": "Sevoflurane's relatively non-pungent odor makes it better tolerated for mask inductions compared to isoflurane, which has a more irritating ether-like smell. Neither inhalant provides true analgesia. Sevoflurane is typically more expensive.",
    "sources": [
      {
        "name": "Lumb & Jones' Veterinary Anesthesia and Analgesia, 5th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.13",
    "category": "Pharmacology & Drug Calculations",
    "question": "A veterinarian orders a drug at 0.5 mg/kg IV for a 35 kg dog. The drug concentration is 10 mg/mL. How many mL should you draw up?",
    "answers": [
      {
        "text": "1.75 mL",
        "correct": true
      },
      {
        "text": "3.5 mL",
        "correct": false
      },
      {
        "text": "0.5 mL",
        "correct": false
      },
      {
        "text": "17.5 mL",
        "correct": false
      }
    ],
    "explanation": "Dose = 35 kg × 0.5 mg/kg = 17.5 mg. Volume = 17.5 mg ÷ 10 mg/mL = 1.75 mL. Always double-check calculations, especially for controlled substances and potent drugs.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.14",
    "category": "Pharmacology & Drug Calculations",
    "question": "Concurrent use of an NSAID and a corticosteroid is dangerous because:",
    "answers": [
      {
        "text": "Both independently damage the GI mucosal barrier, and together the risk of GI ulceration and perforation increases synergistically",
        "correct": true
      },
      {
        "text": "They cancel each other out, providing no benefit",
        "correct": false
      },
      {
        "text": "Corticosteroids make NSAIDs less effective at reducing inflammation",
        "correct": false
      },
      {
        "text": "NSAIDs prevent corticosteroids from being absorbed",
        "correct": false
      }
    ],
    "explanation": "NSAIDs inhibit protective prostaglandins in the GI tract; corticosteroids inhibit mucosal healing and increase acid secretion. Together, the risk of life-threatening GI ulceration and perforation is dramatically increased. A 5-7 day washout period is recommended when switching between classes.",
    "sources": [
      {
        "name": "Plumb's Veterinary Drug Handbook"
      },
      {
        "name": "Papich MG, Saunders Handbook of Veterinary Drugs"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.15",
    "category": "Pharmacology & Drug Calculations",
    "question": "When switching a dog from an NSAID to a corticosteroid (or vice versa), the recommended washout period is:",
    "answers": [
      {
        "text": "5–7 days minimum (longer for long-acting drugs)",
        "correct": true
      },
      {
        "text": "24 hours",
        "correct": false
      },
      {
        "text": "No washout is needed if doses are low",
        "correct": false
      },
      {
        "text": "1 hour",
        "correct": false
      }
    ],
    "explanation": "A minimum 5-7 day drug-free period between NSAIDs and corticosteroids reduces the risk of GI ulceration. For long-acting NSAIDs (e.g., meloxicam with a long half-life) or depot corticosteroid injections, a longer washout of up to 2 weeks may be appropriate.",
    "sources": [
      {
        "name": "Plumb's Veterinary Drug Handbook"
      },
      {
        "name": "AAHA Pain Management Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.16",
    "category": "Pharmacology & Drug Calculations",
    "question": "Telazol (tiletamine/zolazepam combination) is classified as which DEA schedule?",
    "answers": [
      {
        "text": "Schedule III",
        "correct": true
      },
      {
        "text": "Schedule II",
        "correct": false
      },
      {
        "text": "Schedule IV",
        "correct": false
      },
      {
        "text": "It is not a controlled substance",
        "correct": false
      }
    ],
    "explanation": "Telazol contains tiletamine (a dissociative anesthetic related to ketamine, Schedule III) and zolazepam (a benzodiazepine, individually Schedule IV). The combination product is classified at the higher schedule (III), making Telazol a Schedule III controlled substance requiring appropriate documentation and secure storage.",
    "sources": [
      {
        "name": "DEA Controlled Substance Schedules",
        "url": "https://www.deadiversion.usdoj.gov/schedules/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.17",
    "category": "Pharmacology & Drug Calculations",
    "question": "A 10 kg dog requires IV fluids at a maintenance rate of 2 mL/kg/hr using a 60 gtt/mL (microdrip) set. The drip rate is:",
    "answers": [
      {
        "text": "20 drops per minute",
        "correct": true
      },
      {
        "text": "60 drops per minute",
        "correct": false
      },
      {
        "text": "10 drops per minute",
        "correct": false
      },
      {
        "text": "120 drops per minute",
        "correct": false
      }
    ],
    "explanation": "Rate = 10 kg × 2 mL/kg/hr = 20 mL/hr. Drip rate = (20 mL/hr × 60 gtt/mL) ÷ 60 min/hr = 20 gtt/min. With a microdrip set (60 gtt/mL), the drip rate in gtt/min equals the mL/hr rate — a helpful shortcut.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.18",
    "category": "Pharmacology & Drug Calculations",
    "question": "Which of the following veterinary drugs is a Schedule II controlled substance?",
    "answers": [
      {
        "text": "Morphine",
        "correct": true
      },
      {
        "text": "Butorphanol (Schedule IV)",
        "correct": false
      },
      {
        "text": "Tramadol (Schedule IV)",
        "correct": false
      },
      {
        "text": "Ketamine (Schedule III)",
        "correct": false
      }
    ],
    "explanation": "Schedule II includes drugs with high abuse potential: morphine, fentanyl, hydromorphone, oxymorphone, and codeine (when not in combination products). They require the strictest record-keeping and cannot be refilled without a new prescription.",
    "sources": [
      {
        "name": "DEA Controlled Substance Schedules",
        "url": "https://www.deadiversion.usdoj.gov/schedules/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.19",
    "category": "Pharmacology & Drug Calculations",
    "question": "A veterinary prescription label must include all of the following EXCEPT:",
    "answers": [
      {
        "text": "The patient's microchip number",
        "correct": true
      },
      {
        "text": "Name and address of the dispensing veterinarian/clinic",
        "correct": false
      },
      {
        "text": "Name of the drug, strength, and quantity",
        "correct": false
      },
      {
        "text": "Directions for use (dose, frequency, duration, route)",
        "correct": false
      }
    ],
    "explanation": "Federal law requires: dispensing clinic name/address, client name, animal identification, drug name/strength/quantity, date dispensed, directions for use, and the federal caution statement. A microchip number is not required on the label.",
    "sources": [
      {
        "name": "FDA AMDUCA regulations"
      },
      {
        "name": "21 CFR 530"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.20",
    "category": "Pharmacology & Drug Calculations",
    "question": "Metronidazole toxicity in dogs can cause:",
    "answers": [
      {
        "text": "Neurological signs including ataxia, head tilt, nystagmus, and seizures",
        "correct": true
      },
      {
        "text": "Severe cardiac arrhythmias only",
        "correct": false
      },
      {
        "text": "Acute kidney failure",
        "correct": false
      },
      {
        "text": "Hemolytic anemia",
        "correct": false
      }
    ],
    "explanation": "Metronidazole crosses the blood-brain barrier and at high doses or prolonged use can cause central vestibular signs (ataxia, head tilt, nystagmus) and seizures. Treatment is discontinuation; signs typically resolve within 1-2 weeks. Toxicity is more common at doses >60 mg/kg/day.",
    "sources": [
      {
        "name": "Plumb's Veterinary Drug Handbook"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.21",
    "category": "Pharmacology & Drug Calculations",
    "question": "Enrofloxacin (Baytril) should be avoided in young, growing animals because it can cause:",
    "answers": [
      {
        "text": "Cartilage damage (arthropathy) in developing joints",
        "correct": true
      },
      {
        "text": "Liver failure",
        "correct": false
      },
      {
        "text": "Blindness in all species",
        "correct": false
      },
      {
        "text": "Severe diarrhea requiring hospitalization",
        "correct": false
      }
    ],
    "explanation": "Fluoroquinolones (enrofloxacin, marbofloxacin) can damage articular cartilage in growing animals, leading to joint abnormalities. They are contraindicated in dogs under 12-18 months (breed-dependent). In cats, high doses can cause acute retinal degeneration and blindness.",
    "sources": [
      {
        "name": "Plumb's Veterinary Drug Handbook"
      },
      {
        "name": "FDA product label for Baytril"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q4.22",
    "category": "Pharmacology & Drug Calculations",
    "question": "The beyond-use date (BUD) for a compounded non-sterile preparation (when no stability data exists) is typically:",
    "answers": [
      {
        "text": "Up to 90 days for non-aqueous formulations (shorter for aqueous), per revised USP <795>",
        "correct": true
      },
      {
        "text": "5 years",
        "correct": false
      },
      {
        "text": "Indefinite if stored properly",
        "correct": false
      },
      {
        "text": "24 hours regardless of formulation",
        "correct": false
      }
    ],
    "explanation": "Per the revised USP <795> (effective November 2023), non-sterile compounded preparations without stability data are assigned default BUDs based on formulation type: up to 90 days for non-aqueous preparations, 14 days (refrigerated) for water-containing oral formulations, and 30 days for water-containing topical/mucosal preparations. Sterile compounds have shorter BUDs per USP <797>.",
    "sources": [
      {
        "name": "USP Chapter <795> Pharmaceutical Compounding — Nonsterile Preparations"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.13",
    "category": "Laboratory Skills",
    "question": "On fecal flotation, hookworm (Ancylostoma spp.) eggs are characterized by:",
    "answers": [
      {
        "text": "Oval shape with a thin, smooth shell and an internal morula (cluster of dark cells)",
        "correct": true
      },
      {
        "text": "Barrel shape with bipolar plugs",
        "correct": false
      },
      {
        "text": "Large, spherical, thick-walled with rough (mammillated) surface",
        "correct": false
      },
      {
        "text": "Triangular shape with a single operculum",
        "correct": false
      }
    ],
    "explanation": "Hookworm eggs are oval/ellipsoidal, thin-shelled, smooth, and contain a morula (ball of dividing cells) when fresh. They are typically 55-75 µm long. Compare with whipworm (barrel + plugs) and roundworm (large, thick, rough shell).",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "McCurnin's Clinical Textbook"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.14",
    "category": "Laboratory Skills",
    "question": "Heinz bodies on a blood smear indicate:",
    "answers": [
      {
        "text": "Oxidative damage to hemoglobin, commonly seen in cats with onion/garlic toxicity, acetaminophen toxicity, or certain diseases",
        "correct": true
      },
      {
        "text": "Iron deficiency anemia",
        "correct": false
      },
      {
        "text": "Normal findings in healthy dogs",
        "correct": false
      },
      {
        "text": "Platelet clumping",
        "correct": false
      }
    ],
    "explanation": "Heinz bodies are inclusions of denatured hemoglobin that appear as pale, round protrusions on RBCs (especially visible with new methylene blue stain). Cats are particularly susceptible to Heinz body formation due to their hemoglobin structure. Common causes include onion/garlic toxicity and acetaminophen.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "Veterinary Hematology (Thrall et al.)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.15",
    "category": "Laboratory Skills",
    "question": "Polychromasia on a blood smear indicates:",
    "answers": [
      {
        "text": "Active regenerative response — the presence of immature (reticulocyte) red blood cells that stain blue-gray",
        "correct": true
      },
      {
        "text": "Dehydration",
        "correct": false
      },
      {
        "text": "Chronic non-regenerative anemia",
        "correct": false
      },
      {
        "text": "White blood cell contamination",
        "correct": false
      }
    ],
    "explanation": "Polychromatic cells are young RBCs (reticulocytes) released early from bone marrow, appearing larger and blue-gray on Wright's stain due to residual RNA. Their presence indicates the bone marrow is actively responding to anemia (regenerative anemia).",
    "sources": [
      {
        "name": "Veterinary Hematology and Clinical Chemistry (Thrall et al.)"
      },
      {
        "name": "IDEXX reference materials"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.16",
    "category": "Laboratory Skills",
    "question": "An elevated ALP (alkaline phosphatase) in a dog may be caused by all of the following EXCEPT:",
    "answers": [
      {
        "text": "Dehydration alone — ALP is not a hydration marker",
        "correct": true
      },
      {
        "text": "Corticosteroid administration (steroid-induced hepatopathy)",
        "correct": false
      },
      {
        "text": "Cholestasis (bile duct obstruction)",
        "correct": false
      },
      {
        "text": "Bone growth in a young animal",
        "correct": false
      }
    ],
    "explanation": "ALP can be elevated by hepatobiliary disease, corticosteroid use (dogs have a steroid-induced isoenzyme), bone growth/disease, and certain drugs (phenobarbital). Dehydration affects hemoconcentration but ALP elevation is not a primary feature of dehydration alone.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "IDEXX Diagnostic Reference Guide"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.17",
    "category": "Laboratory Skills",
    "question": "Calcium oxalate dihydrate crystals in urine appear as:",
    "answers": [
      {
        "text": "Small, colorless \"envelope\" or \"Maltese cross\" shapes",
        "correct": true
      },
      {
        "text": "Coffin-lid shaped (struvite)",
        "correct": false
      },
      {
        "text": "Long, thin needles (monohydrate form)",
        "correct": false
      },
      {
        "text": "Hexagonal flat plates (cystine)",
        "correct": false
      }
    ],
    "explanation": "Calcium oxalate dihydrate crystals are small, colorless, and have an envelope or X-shaped (octahedral) appearance. Calcium oxalate monohydrate crystals appear as spindle/dumbbell/picket-fence shapes. Both form in acidic to neutral urine and are associated with hypercalcemia or ethylene glycol toxicity.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "Urinalysis and Body Fluids (Strasinger)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.18",
    "category": "Laboratory Skills",
    "question": "An IDEXX SNAP 4Dx Plus test screens for antibodies/antigen to:",
    "answers": [
      {
        "text": "Heartworm antigen, Lyme disease (Borrelia), Ehrlichia canis, Ehrlichia ewingii, Anaplasma phagocytophilum, and Anaplasma platys antibodies",
        "correct": true
      },
      {
        "text": "Parvovirus, distemper, and rabies only",
        "correct": false
      },
      {
        "text": "FeLV and FIV only",
        "correct": false
      },
      {
        "text": "Intestinal parasites (roundworms, hookworms)",
        "correct": false
      }
    ],
    "explanation": "The SNAP 4Dx Plus is a point-of-care test that detects heartworm (Dirofilaria immitis) antigen and antibodies to multiple tick-borne pathogens: Borrelia burgdorferi, Ehrlichia canis, Ehrlichia ewingii, Anaplasma phagocytophilum, and Anaplasma platys.",
    "sources": [
      {
        "name": "IDEXX Laboratories",
        "url": "https://www.idexx.com/en/veterinary/snap-tests/snap-4dx-plus-test/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.19",
    "category": "Laboratory Skills",
    "question": "Activated Clotting Time (ACT) is a point-of-care test that evaluates:",
    "answers": [
      {
        "text": "The intrinsic and common coagulation pathways (factors XII, XI, IX, VIII, X, V, II, and fibrinogen)",
        "correct": true
      },
      {
        "text": "Platelet function only",
        "correct": false
      },
      {
        "text": "Fibrinolysis (clot breakdown)",
        "correct": false
      },
      {
        "text": "Red blood cell fragility",
        "correct": false
      }
    ],
    "explanation": "ACT uses a tube containing an activator (diatomaceous earth or kaolin) and measures time to clot formation. Normal ACT in dogs is 60-110 seconds, cats 50-75 seconds. Prolonged ACT suggests factor deficiency (intrinsic/common pathway), severe thrombocytopenia, or anticoagulant exposure (rodenticide).",
    "sources": [
      {
        "name": "Veterinary Hematology and Clinical Chemistry (Thrall et al.)"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.20",
    "category": "Laboratory Skills",
    "question": "Low albumin (hypoalbuminemia) on a chemistry panel can be caused by:",
    "answers": [
      {
        "text": "All of the following: protein-losing nephropathy, protein-losing enteropathy, liver failure (decreased production), or severe skin wounds",
        "correct": true
      },
      {
        "text": "Dehydration (which would falsely elevate albumin)",
        "correct": false
      },
      {
        "text": "Eating a high-protein diet",
        "correct": false
      },
      {
        "text": "Vaccination within the prior 24 hours",
        "correct": false
      }
    ],
    "explanation": "Albumin is produced by the liver and lost through the kidneys (PLN), GI tract (PLE), or damaged body surfaces. Low albumin can cause edema, ascites, and poor wound healing. Dehydration falsely increases albumin by hemoconcentration.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "IDEXX Diagnostic Reference Guide"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.21",
    "category": "Laboratory Skills",
    "question": "Quality control (QC) on a veterinary in-house chemistry analyzer should be run:",
    "answers": [
      {
        "text": "At minimum daily (or per manufacturer's recommendation) and whenever a new reagent lot is opened or the machine is serviced",
        "correct": true
      },
      {
        "text": "Once per year during the annual maintenance visit",
        "correct": false
      },
      {
        "text": "Only when results seem abnormal",
        "correct": false
      },
      {
        "text": "Never — modern analyzers are self-calibrating",
        "correct": false
      }
    ],
    "explanation": "Quality control ensures accurate results and identifies analyzer drift or reagent degradation. Most guidelines and AAHA standards recommend running QC daily, when opening new reagent lots, after maintenance, and when results are questionable.",
    "sources": [
      {
        "name": "AAHA Diagnostic Laboratory Quality Assurance Standards"
      },
      {
        "name": "IDEXX Operator's Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q5.22",
    "category": "Laboratory Skills",
    "question": "A glucometer calibrated for human blood may read falsely in veterinary patients because:",
    "answers": [
      {
        "text": "The glucose distribution between plasma and red blood cells differs between species, leading to inaccurate readings",
        "correct": true
      },
      {
        "text": "Animals have a completely different form of glucose molecule",
        "correct": false
      },
      {
        "text": "Animal blood is too thick for the test strip",
        "correct": false
      },
      {
        "text": "There is no difference — human glucometers work perfectly for all species",
        "correct": false
      }
    ],
    "explanation": "Species-specific differences in hematocrit and glucose partitioning between plasma and erythrocytes affect readings. Veterinary-specific glucometers (e.g., AlphaTRAK) are calibrated for canine/feline blood and provide more accurate results.",
    "sources": [
      {
        "name": "IDEXX reference materials"
      },
      {
        "name": "Journal of Veterinary Internal Medicine studies on glucometer accuracy"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.11",
    "category": "Surgical Assisting",
    "question": "Mayo scissors differ from Metzenbaum scissors in that Mayo scissors are:",
    "answers": [
      {
        "text": "Heavier with thicker blades, designed for cutting tough tissue (fascia) and suture material",
        "correct": true
      },
      {
        "text": "Lighter and more delicate, for fine tissue dissection",
        "correct": false
      },
      {
        "text": "Exclusively used for bandage removal",
        "correct": false
      },
      {
        "text": "Curved only — they never come in a straight form",
        "correct": false
      }
    ],
    "explanation": "Mayo scissors are robust with thick blades for cutting heavy tissue, fascia, and sutures. They come in straight (suture cutting) and curved (tissue cutting) forms. Metzenbaum scissors are delicate for fine dissection. Using Mayo scissors on delicate tissue causes unnecessary trauma.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.12",
    "category": "Surgical Assisting",
    "question": "The gold standard for verifying autoclave sterilization efficacy is:",
    "answers": [
      {
        "text": "A biological indicator (spore test) using Geobacillus stearothermophilus",
        "correct": true
      },
      {
        "text": "Autoclave indicator tape (external chemical indicator)",
        "correct": false
      },
      {
        "text": "Visual inspection of instruments for debris",
        "correct": false
      },
      {
        "text": "Checking that the autoclave reached temperature on the gauge",
        "correct": false
      }
    ],
    "explanation": "Biological indicators contain highly resistant bacterial spores (G. stearothermophilus for steam). After autoclaving, they are incubated — if no growth occurs, sterilization was achieved. Chemical indicators and tape only confirm exposure to conditions, not actual sterility. BIs should be run weekly.",
    "sources": [
      {
        "name": "AAMI (Association for the Advancement of Medical Instrumentation) Standards"
      },
      {
        "name": "CDC Sterilization Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.13",
    "category": "Surgical Assisting",
    "question": "A Class 5 chemical indicator (integrating indicator) placed inside a surgical pack:",
    "answers": [
      {
        "text": "Reacts to all critical sterilization parameters (time, temperature, and steam) and correlates with biological indicator results",
        "correct": true
      },
      {
        "text": "Only confirms the pack was exposed to heat (like autoclave tape)",
        "correct": false
      },
      {
        "text": "Tests only one parameter (temperature only)",
        "correct": false
      },
      {
        "text": "Replaces the need for biological indicators entirely",
        "correct": false
      }
    ],
    "explanation": "Class 5 integrating indicators are designed to correlate with biological indicator results for specific sterilization cycles. They respond to all critical parameters. However, they supplement — not replace — periodic biological indicator testing (weekly minimum).",
    "sources": [
      {
        "name": "ISO 11140-1 Chemical Indicator Classification"
      },
      {
        "name": "AAMI Standards"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.14",
    "category": "Surgical Assisting",
    "question": "The surgical prep (\"clip and scrub\") area should extend at minimum:",
    "answers": [
      {
        "text": "One hand's-width (approximately 10-15 cm) beyond the anticipated incision on all sides",
        "correct": true
      },
      {
        "text": "Exactly the size of the incision only",
        "correct": false
      },
      {
        "text": "The entire body of the animal",
        "correct": false
      },
      {
        "text": "Only the area directly under the drape fenestration",
        "correct": false
      }
    ],
    "explanation": "Adequate clip margins ensure the sterile field is not compromised if drapes shift or the incision needs to be extended. Hair is clipped beyond the planned surgical area to prevent contamination from hair entering the surgical field.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Fossum's Small Animal Surgery"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.15",
    "category": "Surgical Assisting",
    "question": "The correct antiseptic scrub technique for a surgical site involves:",
    "answers": [
      {
        "text": "Alternating scrub solution and rinse in a circular pattern starting at the incision site and moving outward, never returning to the center",
        "correct": true
      },
      {
        "text": "Scrubbing back and forth across the entire area randomly",
        "correct": false
      },
      {
        "text": "Applying antiseptic once and allowing it to air dry without rinsing",
        "correct": false
      },
      {
        "text": "Starting at the periphery and working inward toward the incision",
        "correct": false
      }
    ],
    "explanation": "The target-pattern scrub starts at the cleanest area (planned incision) and moves outward in concentric circles to the periphery. Contaminated gauze never returns to the center. This is repeated 3 times (or for 5 minutes) with alternating scrub and rinse.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Fossum's Small Animal Surgery, 5th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.16",
    "category": "Surgical Assisting",
    "question": "Electrosurgery (electrocautery) pads must be placed:",
    "answers": [
      {
        "text": "On a large, well-vascularized muscle mass (such as the lateral thigh) with good patient contact and away from bony prominences",
        "correct": true
      },
      {
        "text": "On the tail",
        "correct": false
      },
      {
        "text": "Directly on the incision site",
        "correct": false
      },
      {
        "text": "On top of the surgical drapes",
        "correct": false
      }
    ],
    "explanation": "The grounding (return) pad must have good contact with well-perfused tissue to safely disperse current. Poor contact or placement over bony prominences can cause thermal burns. Hair should be clipped from the pad site and conductive gel applied.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Fossum's Small Animal Surgery"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.17",
    "category": "Surgical Assisting",
    "question": "Chromic gut suture is classified as:",
    "answers": [
      {
        "text": "Natural, monofilament, absorbable",
        "correct": true
      },
      {
        "text": "Synthetic, braided, non-absorbable",
        "correct": false
      },
      {
        "text": "Synthetic, monofilament, absorbable",
        "correct": false
      },
      {
        "text": "Natural, braided, non-absorbable",
        "correct": false
      }
    ],
    "explanation": "Chromic gut is made from sheep/cow intestinal submucosa (natural), processed as monofilament, and treated with chromium salts to slow absorption (hence \"chromic\"). It is absorbed by phagocytosis in 10-40 days. It causes more tissue reaction than synthetic absorbable sutures.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Ethicon Suture Guide"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.18",
    "category": "Surgical Assisting",
    "question": "Flash sterilization (immediate-use steam sterilization) at 132°C for 3-4 minutes is appropriate ONLY for:",
    "answers": [
      {
        "text": "Unwrapped instruments needed urgently when there is no time for a standard wrapped cycle (e.g., a dropped instrument during surgery)",
        "correct": true
      },
      {
        "text": "Routine sterilization of all surgical packs",
        "correct": false
      },
      {
        "text": "Instruments that cannot tolerate steam",
        "correct": false
      },
      {
        "text": "Cold sterilization of heat-sensitive items",
        "correct": false
      }
    ],
    "explanation": "Flash sterilization is reserved for emergencies (dropped instrument). It uses higher temperature (132°C/270°F) for shorter duration (3-4 minutes unwrapped). Instruments cannot be stored after flash sterilization as they are unwrapped and will become contaminated once removed.",
    "sources": [
      {
        "name": "AAMI Standards for Steam Sterilization"
      },
      {
        "name": "CDC Guidelines for Disinfection and Sterilization"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q6.19",
    "category": "Surgical Assisting",
    "question": "A Balfour retractor is used during surgery to:",
    "answers": [
      {
        "text": "Hold open the abdominal wall during a celiotomy (abdominal surgery), providing hands-free exposure",
        "correct": true
      },
      {
        "text": "Retract the eyelids during ophthalmic surgery",
        "correct": false
      },
      {
        "text": "Hold blood vessels for ligation",
        "correct": false
      },
      {
        "text": "Spread the ribs during thoracotomy",
        "correct": false
      }
    ],
    "explanation": "The Balfour is a self-retaining abdominal retractor with a central blade and two lateral arms. It holds the abdominal wall open, allowing the surgeon access without an assistant manually retracting. A Finochietto retractor is used for thoracotomy (rib spreading).",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Fossum's Small Animal Surgery"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.11",
    "category": "Radiology & Imaging",
    "question": "Increasing kVp (kilovolt peak) on a radiograph primarily affects:",
    "answers": [
      {
        "text": "Contrast — higher kVp decreases contrast (produces more shades of gray/long-scale contrast)",
        "correct": true
      },
      {
        "text": "Density only — kVp has no effect on contrast",
        "correct": false
      },
      {
        "text": "Patient motion — higher kVp freezes motion",
        "correct": false
      },
      {
        "text": "Film fog exclusively",
        "correct": false
      }
    ],
    "explanation": "kVp controls X-ray beam energy (penetrating power). Higher kVp produces more scatter radiation and more shades of gray (long-scale/low contrast). Lower kVp produces fewer grays and more black-and-white differences (short-scale/high contrast). mAs primarily controls density.",
    "sources": [
      {
        "name": "Lavin's Radiography for Veterinary Technicians"
      },
      {
        "name": "Thrall's Textbook of Veterinary Diagnostic Radiology"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.12",
    "category": "Radiology & Imaging",
    "question": "Increasing mAs (milliampere-seconds) on a radiograph primarily affects:",
    "answers": [
      {
        "text": "Density (overall blackness/darkness of the image) — higher mAs = more photons = darker image",
        "correct": true
      },
      {
        "text": "Contrast primarily",
        "correct": false
      },
      {
        "text": "Magnification",
        "correct": false
      },
      {
        "text": "Image sharpness/detail",
        "correct": false
      }
    ],
    "explanation": "mAs (mA × time) controls the quantity of X-rays produced. More photons reaching the detector produce a darker (more dense) image. mAs has minimal effect on contrast. The \"golden rule\": adjust mAs for density, adjust kVp for contrast.",
    "sources": [
      {
        "name": "Lavin's Radiography for Veterinary Technicians"
      },
      {
        "name": "Thrall's Textbook of Veterinary Diagnostic Radiology"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.13",
    "category": "Radiology & Imaging",
    "question": "A grid is used in veterinary radiography to:",
    "answers": [
      {
        "text": "Absorb scatter radiation before it reaches the detector, improving image contrast (especially for body parts >10 cm thick)",
        "correct": true
      },
      {
        "text": "Protect the patient from radiation",
        "correct": false
      },
      {
        "text": "Increase the speed of the exposure",
        "correct": false
      },
      {
        "text": "Replace the need for collimation",
        "correct": false
      }
    ],
    "explanation": "Grids contain thin lead strips that absorb scattered photons traveling at oblique angles. They are used for body parts thicker than 10 cm where scatter degrades contrast. Using a grid requires increased mAs (2-3x) to compensate for absorbed primary beam photons.",
    "sources": [
      {
        "name": "Lavin's Radiography for Veterinary Technicians"
      },
      {
        "name": "Thrall's Textbook of Veterinary Diagnostic Radiology"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.14",
    "category": "Radiology & Imaging",
    "question": "For a VD (ventrodorsal) pelvis radiograph to evaluate hip dysplasia, the dog's hindlimbs should be:",
    "answers": [
      {
        "text": "Extended caudally, parallel to each other, with femurs internally rotated so patellas are centered over the trochlear grooves",
        "correct": true
      },
      {
        "text": "Flexed in a \"frog-leg\" position",
        "correct": false
      },
      {
        "text": "Pulled cranially alongside the chest",
        "correct": false
      },
      {
        "text": "Left in any natural position without specific positioning",
        "correct": false
      }
    ],
    "explanation": "The standard hip-extended VD view (OFA view) requires full extension and internal rotation of the hindlimbs to properly superimpose the femoral necks and evaluate hip joint conformation. Proper positioning is essential for OFA/PennHIP evaluation.",
    "sources": [
      {
        "name": "OFA (Orthopedic Foundation for Animals)",
        "url": "https://www.ofa.org/"
      },
      {
        "name": "Thrall's Textbook of Veterinary Diagnostic Radiology"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.15",
    "category": "Radiology & Imaging",
    "question": "The two most common transducer types used in veterinary ultrasonography are:",
    "answers": [
      {
        "text": "Linear and curvilinear (convex) array transducers",
        "correct": true
      },
      {
        "text": "Flat-panel and phased-array only",
        "correct": false
      },
      {
        "text": "Rotating mechanical and annular array",
        "correct": false
      },
      {
        "text": "CT and MRI transducers",
        "correct": false
      }
    ],
    "explanation": "Linear transducers produce a rectangular image and are used for superficial structures (tendons, eyes, small patients). Curvilinear (convex) transducers produce a wider fan-shaped image and are used for abdominal imaging in medium-to-large dogs. Sector/phased-array probes are used for echocardiography.",
    "sources": [
      {
        "name": "Mattoon & Nyland's Small Animal Diagnostic Ultrasound, 3rd Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.16",
    "category": "Radiology & Imaging",
    "question": "Before an abdominal ultrasound, patient preparation typically includes:",
    "answers": [
      {
        "text": "Clipping hair over the scan area and applying acoustic coupling gel to eliminate air between the transducer and skin",
        "correct": true
      },
      {
        "text": "Administering IV contrast agent",
        "correct": false
      },
      {
        "text": "Inflating the abdomen with CO2",
        "correct": false
      },
      {
        "text": "No preparation is needed — ultrasound works through hair",
        "correct": false
      }
    ],
    "explanation": "Air trapped in hair prevents ultrasound transmission. Clipping and applying coupling gel ensures direct contact and optimal sound wave transmission. Alcohol can be used as a temporary coupling agent for quick scans but gel provides better images.",
    "sources": [
      {
        "name": "Mattoon & Nyland's Small Animal Diagnostic Ultrasound"
      },
      {
        "name": "McCurnin's Clinical Textbook"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.17",
    "category": "Radiology & Imaging",
    "question": "CT (computed tomography) imaging requires the veterinary patient to be:",
    "answers": [
      {
        "text": "Under general anesthesia to prevent motion artifact during the scan",
        "correct": true
      },
      {
        "text": "Conscious and standing",
        "correct": false
      },
      {
        "text": "Only mildly sedated — CT is tolerant of motion",
        "correct": false
      },
      {
        "text": "Restrained manually without any sedation",
        "correct": false
      }
    ],
    "explanation": "CT requires the patient to remain completely still during acquisition. Even slight movement causes significant motion artifact. General anesthesia ensures immobility and allows proper positioning. Some very brief CT protocols may allow heavy sedation in calm patients.",
    "sources": [
      {
        "name": "Thrall's Textbook of Veterinary Diagnostic Radiology, 7th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q7.18",
    "category": "Radiology & Imaging",
    "question": "The purpose of collimation in radiography is to:",
    "answers": [
      {
        "text": "Restrict the X-ray beam to only the area of clinical interest, reducing patient dose and scatter radiation while improving image contrast",
        "correct": true
      },
      {
        "text": "Increase the beam size to cover the entire patient",
        "correct": false
      },
      {
        "text": "Filter out all radiation so only visible light reaches the patient",
        "correct": false
      },
      {
        "text": "Focus the beam into a single point for maximum penetration",
        "correct": false
      }
    ],
    "explanation": "Collimation uses lead shutters to narrow the beam. Benefits include: reduced patient/staff exposure, reduced scatter (better contrast), and medicolegal documentation of proper radiation safety. The collimated field should be visible (light field) before exposure.",
    "sources": [
      {
        "name": "Lavin's Radiography for Veterinary Technicians"
      },
      {
        "name": "OSHA radiation safety guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.13",
    "category": "Emergency & Critical Care",
    "question": "A dog presents with acute non-productive retching, abdominal distension, and a tympanic abdomen. The most likely diagnosis is:",
    "answers": [
      {
        "text": "Gastric dilatation-volvulus (GDV/bloat) — a life-threatening surgical emergency",
        "correct": true
      },
      {
        "text": "Simple gastritis that will resolve with antacids",
        "correct": false
      },
      {
        "text": "Intestinal parasites",
        "correct": false
      },
      {
        "text": "Food bloat requiring monitoring only",
        "correct": false
      }
    ],
    "explanation": "The triad of non-productive retching, progressive abdominal distension, and tympanic (drum-like) abdomen in a large/deep-chested dog is classic for GDV. This is a true emergency requiring immediate stabilization (IV fluids, gastric decompression) and emergency surgery.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.14",
    "category": "Emergency & Critical Care",
    "question": "Trocarization for GDV decompression involves:",
    "answers": [
      {
        "text": "Inserting a large-bore needle (14-16 gauge) through the aseptically prepared right lateral abdominal wall into the distended stomach to release trapped gas",
        "correct": true
      },
      {
        "text": "Placing a nasogastric tube through the nose",
        "correct": false
      },
      {
        "text": "Performing an emergency celiotomy at the midline",
        "correct": false
      },
      {
        "text": "Administering simethicone orally to reduce gas",
        "correct": false
      }
    ],
    "explanation": "Trocarization provides rapid relief of gastric pressure when orogastric intubation is not immediately possible or fails. The needle is inserted at the point of maximal distension (right paracostal region). A rush of gas confirms correct placement. This stabilizes the patient for further treatment.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.15",
    "category": "Emergency & Critical Care",
    "question": "The toxic dose of theobromine for cardiac effects in dogs is approximately:",
    "answers": [
      {
        "text": "40–50 mg/kg",
        "correct": true
      },
      {
        "text": "1 mg/kg",
        "correct": false
      },
      {
        "text": "200 mg/kg",
        "correct": false
      },
      {
        "text": "500 mg/kg",
        "correct": false
      }
    ],
    "explanation": "Theobromine toxicity: mild signs at ~20 mg/kg, cardiac effects (tachycardia, arrhythmias) at 40-50 mg/kg, seizures at >60 mg/kg. Dark/baker's chocolate contains 130-450 mg theobromine/oz; milk chocolate ~44-60 mg/oz; white chocolate has negligible theobromine.",
    "sources": [
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      },
      {
        "name": "ASPCA Animal Poison Control"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.16",
    "category": "Emergency & Critical Care",
    "question": "Xylitol ingestion in dogs: the dose at which hepatic failure may occur is approximately:",
    "answers": [
      {
        "text": ">0.5 g/kg (500 mg/kg)",
        "correct": true
      },
      {
        "text": ">0.001 g/kg",
        "correct": false
      },
      {
        "text": ">10 g/kg",
        "correct": false
      },
      {
        "text": "Hepatic failure does not occur with xylitol",
        "correct": false
      }
    ],
    "explanation": "Xylitol causes hypoglycemia at doses as low as 0.1 g/kg (from massive insulin release). Hepatic failure can occur at doses >0.5 g/kg and may develop 12-72 hours post-ingestion. Early treatment (IV dextrose, hepatoprotectants, monitoring) is critical.",
    "sources": [
      {
        "name": "ASPCA Animal Poison Control"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.17",
    "category": "Emergency & Critical Care",
    "question": "During a blood transfusion, the first sign suggesting an acute hemolytic reaction is often:",
    "answers": [
      {
        "text": "Fever, restlessness, and/or vomiting occurring within the first 15-30 minutes",
        "correct": true
      },
      {
        "text": "A skin rash appearing 48 hours later",
        "correct": false
      },
      {
        "text": "Weight gain over several days",
        "correct": false
      },
      {
        "text": "Increased appetite",
        "correct": false
      }
    ],
    "explanation": "Acute hemolytic transfusion reactions typically occur within the first 15-30 minutes. Signs include fever, restlessness/anxiety, vomiting, tachycardia, hemoglobinuria (red urine), facial edema, and potentially collapse/shock. The transfusion must be stopped immediately.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.18",
    "category": "Emergency & Critical Care",
    "question": "The first action when a transfusion reaction is suspected is:",
    "answers": [
      {
        "text": "Stop the transfusion immediately while maintaining IV access with crystalloid fluids",
        "correct": true
      },
      {
        "text": "Increase the transfusion rate to finish quickly",
        "correct": false
      },
      {
        "text": "Administer the entire unit before treating",
        "correct": false
      },
      {
        "text": "Wait 30 minutes to see if signs resolve on their own",
        "correct": false
      }
    ],
    "explanation": "At the first sign of a transfusion reaction, STOP the transfusion immediately. Maintain IV access with saline. Assess the patient (vitals, mucous membranes). Save the remaining blood product and patient blood sample for crossmatch verification. Treat symptomatically.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "AAHA Transfusion Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.19",
    "category": "Emergency & Critical Care",
    "question": "A modified Glasgow Coma Scale score in veterinary medicine ranges from:",
    "answers": [
      {
        "text": "3-18, with lower scores indicating more severe neurological dysfunction",
        "correct": true
      },
      {
        "text": "1-100",
        "correct": false
      },
      {
        "text": "3-15 (identical to human GCS)",
        "correct": false
      },
      {
        "text": "0-5",
        "correct": false
      }
    ],
    "explanation": "The modified Glasgow Coma Scale for small animals evaluates motor activity (1-6), brainstem reflexes (1-6), and level of consciousness (1-6). Since each subscale has a minimum of 1, the total ranges from 3-18. Scores ≤8 indicate a grave prognosis. It is used to monitor head trauma patients and guide treatment decisions.",
    "sources": [
      {
        "name": "Platt & Olby, BSAVA Manual of Canine and Feline Neurology"
      },
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.20",
    "category": "Emergency & Critical Care",
    "question": "Oxygen supplementation via nasal cannula in a dog typically delivers oxygen at:",
    "answers": [
      {
        "text": "50–100 mL/kg/min (1-6 L/min depending on patient size), achieving 30-70% FiO2",
        "correct": true
      },
      {
        "text": "15 L/min regardless of patient size",
        "correct": false
      },
      {
        "text": "0.1 mL/kg/min",
        "correct": false
      },
      {
        "text": "Nasal cannulas cannot be used in veterinary patients",
        "correct": false
      }
    ],
    "explanation": "Nasal oxygen cannulas are placed in one or both nares and secured with sutures or tissue glue. Flow rates of 50-100 mL/kg/min (typically 0.5-6 L/min) can achieve FiO2 of 30-70%. Higher rates cause discomfort and aerophagia. Flow-by oxygen (held near the nose) provides lower FiO2.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.21",
    "category": "Emergency & Critical Care",
    "question": "Hydrogen peroxide (3%) can be used to induce emesis in dogs at a dose of:",
    "answers": [
      {
        "text": "1-2 mL/kg PO (maximum 45 mL total), NOT recommended in cats",
        "correct": true
      },
      {
        "text": "10 mL/kg PO",
        "correct": false
      },
      {
        "text": "0.1 mL/kg IV",
        "correct": false
      },
      {
        "text": "It is safe and recommended for cats",
        "correct": false
      }
    ],
    "explanation": "3% hydrogen peroxide at 1-2 mL/kg PO (max 45 mL) typically induces vomiting in dogs within 10-15 minutes. It is NOT recommended in cats (causes severe hemorrhagic gastritis) or rabbits. Apomorphine is the preferred veterinary emetic for dogs when available.",
    "sources": [
      {
        "name": "ASPCA Animal Poison Control"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q8.22",
    "category": "Emergency & Critical Care",
    "question": "DKA (diabetic ketoacidosis) in a dog or cat requires all of the following EXCEPT:",
    "answers": [
      {
        "text": "Oral insulin administration — insulin for DKA must be given IV (CRI) or IM, not orally",
        "correct": true
      },
      {
        "text": "Aggressive IV fluid therapy to correct dehydration",
        "correct": false
      },
      {
        "text": "Regular (short-acting) insulin therapy",
        "correct": false
      },
      {
        "text": "Electrolyte monitoring and supplementation (especially potassium)",
        "correct": false
      }
    ],
    "explanation": "DKA treatment includes: aggressive IV fluids (correct dehydration), regular insulin CRI (0.05-0.1 U/kg/hr) or IM protocol, potassium supplementation (insulin drives K+ intracellularly), phosphorus monitoring, and bicarbonate only if pH <7.0. Insulin is a protein destroyed by gastric acid — it cannot be given orally.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.9",
    "category": "Restraint & Handling",
    "question": "When restraining a rabbit, it is critical to always support the:",
    "answers": [
      {
        "text": "Hindquarters — unsupported rabbits can kick forcefully enough to fracture their own lumbar spine",
        "correct": true
      },
      {
        "text": "Ears — rabbits should be lifted by their ears",
        "correct": false
      },
      {
        "text": "Tail — like picking up a mouse",
        "correct": false
      },
      {
        "text": "Scruff only, with hind legs dangling",
        "correct": false
      }
    ],
    "explanation": "Rabbits have powerful hindleg muscles relative to their lightweight, fragile skeleton. If they kick while unsupported, they can fracture lumbar vertebrae (L7 is most common), causing paralysis. Always support the hindquarters firmly when lifting or carrying.",
    "sources": [
      {
        "name": "Quesenberry & Carpenter's Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.10",
    "category": "Restraint & Handling",
    "question": "A bird (psittacine) should be restrained by:",
    "answers": [
      {
        "text": "Wrapping in a towel and gently but firmly holding the head between thumb and forefinger behind the mandibles, while supporting the body",
        "correct": true
      },
      {
        "text": "Grasping both wings together above the back",
        "correct": false
      },
      {
        "text": "Holding by the tail feathers",
        "correct": false
      },
      {
        "text": "Allowing it to perch freely during all procedures",
        "correct": false
      }
    ],
    "explanation": "Birds are restrained with a towel wrap; the head is controlled by holding behind the mandibles (not around the neck, which restricts breathing). The keel must not be compressed as birds lack a diaphragm and rely on sternal movement to breathe.",
    "sources": [
      {
        "name": "Ritchie, Harrison & Harrison's Avian Medicine: Principles and Application"
      },
      {
        "name": "Carpenter's Exotic Animal Formulary"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.11",
    "category": "Restraint & Handling",
    "question": "Fear Free practice recommends using pheromone products in the clinic. Adaptil (DAP) is a synthetic analog of:",
    "answers": [
      {
        "text": "Dog appeasing pheromone — secreted by lactating bitches to calm puppies",
        "correct": true
      },
      {
        "text": "Cat facial pheromone (that would be Feliway)",
        "correct": false
      },
      {
        "text": "Horse calming pheromone",
        "correct": false
      },
      {
        "text": "A sedative drug delivered through the air",
        "correct": false
      }
    ],
    "explanation": "Adaptil (Dog Appeasing Pheromone) is a synthetic analog of the pheromone secreted from the intermammary area of lactating bitches. It has been shown to reduce anxiety in dogs during veterinary visits, thunderstorms, and travel. Feliway is the feline facial pheromone analog.",
    "sources": [
      {
        "name": "Fear Free Pets",
        "url": "https://fearfreepets.com/"
      },
      {
        "name": "Mills et al., JAVMA studies on DAP efficacy"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.12",
    "category": "Restraint & Handling",
    "question": "The \"less is more\" principle of Fear Free handling means:",
    "answers": [
      {
        "text": "Using the minimum restraint necessary and stopping/reassessing if the animal's fear, anxiety, and stress (FAS) escalate beyond a manageable level",
        "correct": true
      },
      {
        "text": "Spending less time with each patient to reduce overall stress",
        "correct": false
      },
      {
        "text": "Using no restraint at all, even if the animal becomes dangerous",
        "correct": false
      },
      {
        "text": "Handling animals only in groups to reduce individual attention",
        "correct": false
      }
    ],
    "explanation": "If an animal's FAS level escalates beyond what allows safe, humane handling, the Fear Free approach says to STOP, consider anxiolytics or sedation, and reschedule non-urgent procedures. Forcing a terrified animal increases injury risk and creates lasting negative associations.",
    "sources": [
      {
        "name": "Fear Free Certification Program",
        "url": "https://fearfreepets.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.13",
    "category": "Restraint & Handling",
    "question": "For lateral recumbency restraint (e.g., for a lateral saphenous draw or lateral radiograph), the restrainer should:",
    "answers": [
      {
        "text": "Stand behind the animal, lean slightly over it, hold the down forelimb and hindlimb closest to the table, while a second person performs the procedure on the upward-facing limbs",
        "correct": true
      },
      {
        "text": "Stand in front of the animal facing its ventral abdomen",
        "correct": false
      },
      {
        "text": "Hold only the head while the body is unrestrained",
        "correct": false
      },
      {
        "text": "Place the animal prone (sternal) and press down on its back",
        "correct": false
      }
    ],
    "explanation": "In lateral restraint, the handler positions behind the animal's back, reaching over to grasp both down-side limbs (front and rear). This keeps the handler's body as a barrier against the animal rolling up, while the upper limbs are free for venipuncture or other procedures.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians, 9th Ed."
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.14",
    "category": "Restraint & Handling",
    "question": "Chemical restraint with gabapentin (50-100 mg PO) given 2-3 hours before a veterinary visit is a Fear Free strategy commonly used for:",
    "answers": [
      {
        "text": "Anxious or fractious cats — reducing fear and facilitating handling without full sedation",
        "correct": true
      },
      {
        "text": "Dogs with seizure disorders only",
        "correct": false
      },
      {
        "text": "Horses before trailer loading",
        "correct": false
      },
      {
        "text": "Reptiles before handling",
        "correct": false
      }
    ],
    "explanation": "Gabapentin at 50-100 mg/cat PO given 2-3 hours before visits provides mild sedation and anxiolysis, making the visit less stressful. It is increasingly recommended as part of Fear Free practice for cats that are difficult to examine or transport.",
    "sources": [
      {
        "name": "AAFP/ISFM Feline-Friendly Handling Guidelines"
      },
      {
        "name": "Fear Free Certified practices",
        "url": "https://fearfreepets.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q9.15",
    "category": "Restraint & Handling",
    "question": "When restraining livestock (cattle), the most dangerous position for a handler to stand is:",
    "answers": [
      {
        "text": "Directly behind the animal (in the kick zone)",
        "correct": true
      },
      {
        "text": "At the animal's shoulder",
        "correct": false
      },
      {
        "text": "Facing the animal's head from the front at a safe distance",
        "correct": false
      },
      {
        "text": "To the side, near the flank but with an escape route",
        "correct": false
      }
    ],
    "explanation": "Cattle can kick sideways and backward with tremendous force. Standing directly behind an animal places the handler in the \"kick zone.\" The safest positions are at the shoulder or at an angle to the rear with a solid barrier between handler and animal.",
    "sources": [
      {
        "name": "OSHA Agricultural Safety Guidelines"
      },
      {
        "name": "Grandin's Guide to Working with Farm Animals"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.11",
    "category": "Medical Nursing & Patient Care",
    "question": "The Resting Energy Requirement (RER) for a hospitalized patient is calculated as:",
    "answers": [
      {
        "text": "RER (kcal/day) = 70 × (body weight in kg)^0.75",
        "correct": true
      },
      {
        "text": "RER = body weight in kg × 100",
        "correct": false
      },
      {
        "text": "RER = 10 × body weight in lbs",
        "correct": false
      },
      {
        "text": "RER = body weight in kg ÷ 2",
        "correct": false
      }
    ],
    "explanation": "RER represents baseline caloric needs at rest. For a 10 kg dog: RER = 70 × (10)^0.75 = 70 × 5.62 ≈ 394 kcal/day. Illness factors (typically 1.0-1.2 × RER for hospitalized patients) are applied based on clinical status. Overfeeding critically ill patients can cause refeeding syndrome.",
    "sources": [
      {
        "name": "WSAVA Nutritional Assessment Guidelines"
      },
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.12",
    "category": "Medical Nursing & Patient Care",
    "question": "A nasoesophageal (NE) feeding tube is appropriate for:",
    "answers": [
      {
        "text": "Short-term nutritional support (up to 7 days) in patients that cannot eat voluntarily but have a functional GI tract",
        "correct": true
      },
      {
        "text": "Long-term feeding for months",
        "correct": false
      },
      {
        "text": "Patients with esophageal strictures or megaesophagus",
        "correct": false
      },
      {
        "text": "Patients that are actively vomiting",
        "correct": false
      }
    ],
    "explanation": "NE tubes are placed through the nostril into the distal esophagus. They require liquid diets due to small diameter (3.5-8 Fr). They are appropriate for short-term use in alert patients with functional GI tracts. For long-term feeding, esophagostomy or gastrostomy tubes are preferred.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "WSAVA Nutritional Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.13",
    "category": "Medical Nursing & Patient Care",
    "question": "Decubital ulcers (pressure sores) in recumbent patients can be prevented by:",
    "answers": [
      {
        "text": "Turning the patient every 4 hours, providing thick padded bedding, and keeping skin clean and dry",
        "correct": true
      },
      {
        "text": "Keeping the patient in the same position to avoid disturbing them",
        "correct": false
      },
      {
        "text": "Applying topical antibiotics prophylactically to all bony prominences",
        "correct": false
      },
      {
        "text": "Restricting all movement",
        "correct": false
      }
    ],
    "explanation": "Pressure sores develop when sustained pressure on bony prominences (hips, elbows, hocks) compromises blood flow. Prevention includes regular repositioning (every 2-4 hours), padded/egg-crate foam bedding, clean dry skin, and adequate nutrition to support tissue integrity.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "McCurnin's Clinical Textbook"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.14",
    "category": "Medical Nursing & Patient Care",
    "question": "When placing ECG leads on a dog using the standard \"white right, red left\" approach, the green (ground) lead is placed on:",
    "answers": [
      {
        "text": "Right hindlimb",
        "correct": true
      },
      {
        "text": "Left forelimb",
        "correct": false
      },
      {
        "text": "Right forelimb",
        "correct": false
      },
      {
        "text": "Left hindlimb",
        "correct": false
      }
    ],
    "explanation": "Standard ECG lead placement: White = right forelimb, Black = left forelimb, Red = left hindlimb, Green = right hindlimb. Mnemonic: \"White is Right (arm), smoke (black) over fire (red) on the left, and green is what's left.\" The patient is typically in right lateral recumbency.",
    "sources": [
      {
        "name": "Tilley's Essentials of Canine and Feline Electrocardiography"
      },
      {
        "name": "McCurnin's Clinical Textbook"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.15",
    "category": "Medical Nursing & Patient Care",
    "question": "An oxygen cage provides what approximate FiO2 (fraction of inspired oxygen)?",
    "answers": [
      {
        "text": "40-60% FiO2, depending on the cage design and oxygen flow rate",
        "correct": true
      },
      {
        "text": "100% FiO2 like a closed anesthetic circuit",
        "correct": false
      },
      {
        "text": "21% (same as room air)",
        "correct": false
      },
      {
        "text": "10% FiO2",
        "correct": false
      }
    ],
    "explanation": "Oxygen cages typically achieve 40-60% FiO2 (vs. 21% in room air). They are useful for patients that cannot tolerate nasal cannulas or masks. Disadvantages include limited patient access, temperature/humidity buildup, and inability to closely monitor the patient without opening the cage.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.16",
    "category": "Medical Nursing & Patient Care",
    "question": "The four classic stages of wound healing in order are:",
    "answers": [
      {
        "text": "Hemostasis → Inflammation → Proliferation → Remodeling (maturation)",
        "correct": true
      },
      {
        "text": "Remodeling → Inflammation → Hemostasis → Proliferation",
        "correct": false
      },
      {
        "text": "Proliferation → Hemostasis → Inflammation → Remodeling",
        "correct": false
      },
      {
        "text": "Inflammation → Proliferation → Hemostasis → Remodeling",
        "correct": false
      }
    ],
    "explanation": "Hemostasis (immediate clotting), Inflammation (hours-days; debridement by neutrophils/macrophages), Proliferation (days-weeks; granulation tissue, angiogenesis, epithelialization), and Remodeling (weeks-months/years; collagen reorganization, scar maturation). Understanding these stages guides wound management decisions.",
    "sources": [
      {
        "name": "Fossum's Small Animal Surgery"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.17",
    "category": "Medical Nursing & Patient Care",
    "question": "A chest tube that stops draining fluid but the patient remains dyspneic — the FIRST thing to check is:",
    "answers": [
      {
        "text": "Whether the tube is kinked, clogged, or has migrated out of position",
        "correct": true
      },
      {
        "text": "Whether the patient needs a second surgery immediately",
        "correct": false
      },
      {
        "text": "Remove the tube immediately since it's no longer working",
        "correct": false
      },
      {
        "text": "Increase the IV fluid rate to increase drainage",
        "correct": false
      }
    ],
    "explanation": "A non-draining chest tube in a still-dyspneic patient suggests tube malfunction: kinking, obstruction by fibrin clots, or displacement. Gently flush with sterile saline (per protocol), reposition, or take radiographs to assess placement before considering tube replacement.",
    "sources": [
      {
        "name": "Silverstein & Hopper's Small Animal Critical Care Medicine"
      },
      {
        "name": "Fossum's Small Animal Surgery"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q10.18",
    "category": "Medical Nursing & Patient Care",
    "question": "The normal resting respiratory rate for a dog at home (sleeping respiratory rate) that owners should monitor post-discharge for heart failure is:",
    "answers": [
      {
        "text": "Less than 30 breaths per minute",
        "correct": true
      },
      {
        "text": "Less than 10 breaths per minute",
        "correct": false
      },
      {
        "text": "40-60 breaths per minute",
        "correct": false
      },
      {
        "text": "Respiratory rate monitoring at home is not useful",
        "correct": false
      }
    ],
    "explanation": "A sleeping/resting respiratory rate >30 breaths/min in dogs (or >40 in cats) may indicate worsening heart failure or pulmonary edema. Owners are taught to count breaths while the pet is sleeping. Increases warrant immediate veterinary evaluation.",
    "sources": [
      {
        "name": "ACVIM Consensus Statement on Chronic Heart Failure"
      },
      {
        "name": "Cardiology for Veterinary Technicians (Smith)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.7",
    "category": "Communication & Client Education",
    "question": "Informed consent for a surgical procedure must include:",
    "answers": [
      {
        "text": "Explanation of the procedure, potential risks and complications, expected outcomes, estimated cost, and alternatives — documented with a client signature",
        "correct": true
      },
      {
        "text": "Only a verbal explanation with no documentation needed",
        "correct": false
      },
      {
        "text": "A signed consent for the procedure name only, with no discussion of risks",
        "correct": false
      },
      {
        "text": "Consent is not legally required in veterinary medicine",
        "correct": false
      }
    ],
    "explanation": "Informed consent is both an ethical and legal requirement. It must be documented in writing, signed by the client, and include: procedure description, risks/complications, prognosis, cost estimate, and alternative options (including doing nothing). The client must have the opportunity to ask questions.",
    "sources": [
      {
        "name": "AVMA Principles of Veterinary Medical Ethics"
      },
      {
        "name": "State veterinary practice acts"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.8",
    "category": "Communication & Client Education",
    "question": "When a pet owner is experiencing anticipatory grief before a euthanasia appointment, an appropriate response from the vet tech is:",
    "answers": [
      {
        "text": "Acknowledge their pain with empathy (\"This is clearly a very difficult time for you and your family\"), offer grief support resources, and give them space and time",
        "correct": true
      },
      {
        "text": "\"Don't be sad, it's just an animal\"",
        "correct": false
      },
      {
        "text": "Avoid all eye contact and conversation about feelings",
        "correct": false
      },
      {
        "text": "\"You should have brought them in sooner\"",
        "correct": false
      }
    ],
    "explanation": "Empathetic acknowledgment validates the client's grief without judgment. Providing resources (pet loss hotlines, support groups), allowing privacy, and following up after euthanasia are all evidence-based grief support strategies that strengthen the client-clinic bond.",
    "sources": [
      {
        "name": "AAHA End-of-Life Care Guidelines"
      },
      {
        "name": "Companion Animal Euthanasia: Techniques and Procedure (AVMA)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.9",
    "category": "Communication & Client Education",
    "question": "Zoonotic disease counseling by a vet tech should include informing clients that which common intestinal parasite can infect humans (especially children)?",
    "answers": [
      {
        "text": "Roundworms (Toxocara spp.) — larval migration can cause visceral or ocular larva migrans in humans",
        "correct": true
      },
      {
        "text": "Tapeworms are the only zoonotic concern from pets",
        "correct": false
      },
      {
        "text": "No parasites from dogs or cats can infect humans",
        "correct": false
      },
      {
        "text": "Heartworms commonly infect humans through mosquitoes",
        "correct": false
      }
    ],
    "explanation": "Toxocara eggs shed in feces become infective in the environment after 2-4 weeks. Children playing in contaminated soil can ingest eggs, leading to visceral larva migrans (VLM) or ocular larva migrans (OLM). Regular deworming and fecal testing reduce risk.",
    "sources": [
      {
        "name": "CDC Parasites",
        "url": "https://www.cdc.gov/parasites/toxocariasis/"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.10",
    "category": "Communication & Client Education",
    "question": "Medical records in veterinary practice should follow the SOAP format. \"S\" stands for:",
    "answers": [
      {
        "text": "Subjective — the owner's report of the pet's history, symptoms, and concerns",
        "correct": true
      },
      {
        "text": "Surgery — details of any surgical procedure",
        "correct": false
      },
      {
        "text": "Systemic — a systems-based physical exam",
        "correct": false
      },
      {
        "text": "Standard — the standard of care applied",
        "correct": false
      }
    ],
    "explanation": "SOAP: S = Subjective (owner's report/history), O = Objective (physical exam findings, lab results, vital signs), A = Assessment (diagnosis or differential list), P = Plan (treatment, diagnostics, follow-up). This format standardizes medical documentation.",
    "sources": [
      {
        "name": "AAHA Medical Records Standards"
      },
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.11",
    "category": "Communication & Client Education",
    "question": "When a client asks about pet insurance, the vet tech should:",
    "answers": [
      {
        "text": "Provide general information about how pet insurance works, recommend they research different plans, but not endorse a specific company",
        "correct": true
      },
      {
        "text": "Refuse to discuss insurance entirely",
        "correct": false
      },
      {
        "text": "Strongly recommend one specific insurance company",
        "correct": false
      },
      {
        "text": "Tell the client insurance is never worth the cost",
        "correct": false
      }
    ],
    "explanation": "Vet techs can educate about the concept of pet insurance (reimbursement-based, pre-existing condition exclusions, wellness add-ons) without recommending a specific company to avoid conflicts of interest. Many clinics keep brochures from multiple providers.",
    "sources": [
      {
        "name": "NAVTA Veterinary Technician Code of Ethics"
      },
      {
        "name": "AAHA Client Communication Guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.12",
    "category": "Communication & Client Education",
    "question": "To improve medication compliance, which communication strategy is most effective?",
    "answers": [
      {
        "text": "Demonstrate how to give the medication, provide written instructions, use a follow-up reminder call/text, and address barriers (cost, difficulty pilling)",
        "correct": true
      },
      {
        "text": "Simply tell the owner once and assume they understood",
        "correct": false
      },
      {
        "text": "Only provide the prescription — no explanation needed",
        "correct": false
      },
      {
        "text": "Use complex medical terminology to establish authority",
        "correct": false
      }
    ],
    "explanation": "Studies show compliance improves with: hands-on demonstration, written take-home instructions with pictures, follow-up communication, addressing specific barriers (flavored formulations for difficult cats, pill pockets for dogs), and confirming understanding using teach-back method.",
    "sources": [
      {
        "name": "AAHA Compliance Studies"
      },
      {
        "name": "Bayer Veterinary Usage Studies"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q11.13",
    "category": "Communication & Client Education",
    "question": "A client reports they've been giving their cat acetaminophen (Tylenol) for pain. The vet tech should:",
    "answers": [
      {
        "text": "Advise them to stop immediately and bring the cat in — acetaminophen is highly toxic to cats and can cause methemoglobinemia and liver failure",
        "correct": true
      },
      {
        "text": "Confirm this is an appropriate pain medication for cats",
        "correct": false
      },
      {
        "text": "Recommend increasing the dose for better effect",
        "correct": false
      },
      {
        "text": "Tell them to switch to ibuprofen instead",
        "correct": false
      }
    ],
    "explanation": "Acetaminophen is LETHAL to cats even at low doses. Cats lack glucuronyl transferase needed for metabolism, leading to methemoglobinemia (Heinz bodies, cyanosis, brown blood) and hepatic necrosis. A single regular-strength tablet (325 mg) can kill a cat.",
    "sources": [
      {
        "name": "ASPCA Animal Poison Control"
      },
      {
        "name": "Merck Veterinary Manual",
        "url": "https://www.merckvetmanual.com/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.16",
    "category": "Veterinary Medical Terminology",
    "question": "The suffix \"-otomy\" means:",
    "answers": [
      {
        "text": "Cutting into / incision (without removal)",
        "correct": true
      },
      {
        "text": "Surgical removal (that would be -ectomy)",
        "correct": false
      },
      {
        "text": "Creating a new permanent opening (that would be -ostomy)",
        "correct": false
      },
      {
        "text": "Surgical repair (that would be -plasty)",
        "correct": false
      }
    ],
    "explanation": "-otomy = cutting into/incision. Examples: cystotomy (incision into the bladder), gastrotomy (incision into the stomach), thoracotomy (incision into the thorax). Compare: -ectomy = removal, -ostomy = creating a permanent opening, -plasty = surgical repair.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.17",
    "category": "Veterinary Medical Terminology",
    "question": "The suffix \"-ostomy\" means:",
    "answers": [
      {
        "text": "Creating a new permanent opening between two structures or to the body surface",
        "correct": true
      },
      {
        "text": "Cutting into a structure temporarily",
        "correct": false
      },
      {
        "text": "Surgical removal of a structure",
        "correct": false
      },
      {
        "text": "Inflammation",
        "correct": false
      }
    ],
    "explanation": "-ostomy = creating a new permanent opening. Examples: colostomy (opening from colon to skin), urethrostomy (new urethral opening), tracheostomy (opening in trachea). Distinguished from -otomy (temporary incision) and -ectomy (removal).",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.18",
    "category": "Veterinary Medical Terminology",
    "question": "The suffix \"-pexy\" means:",
    "answers": [
      {
        "text": "Surgical fixation (suturing in place)",
        "correct": true
      },
      {
        "text": "Removal",
        "correct": false
      },
      {
        "text": "Inflammation",
        "correct": false
      },
      {
        "text": "Visual examination",
        "correct": false
      }
    ],
    "explanation": "-pexy = surgical fixation/attachment. Examples: gastropexy (fixing stomach to body wall, done during GDV surgery to prevent recurrence), nephropexy (fixing a floating kidney), orchiopexy (fixing an undescended testicle).",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.19",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"dysplasia\" means:",
    "answers": [
      {
        "text": "Abnormal development or growth of tissue or an organ",
        "correct": true
      },
      {
        "text": "Destruction of tissue (that would be -lysis)",
        "correct": false
      },
      {
        "text": "Enlargement of tissue (that would be -megaly)",
        "correct": false
      },
      {
        "text": "Softening of tissue (that would be -malacia)",
        "correct": false
      }
    ],
    "explanation": "Dys- = abnormal/difficult, -plasia = formation/growth. Dysplasia = abnormal development. Examples: hip dysplasia (abnormal hip joint formation), elbow dysplasia, renal dysplasia. Distinguished from neoplasia (new growth/tumor) and hyperplasia (excessive normal growth).",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      },
      {
        "name": "Merck Veterinary Manual"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.20",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"neoplasia\" means:",
    "answers": [
      {
        "text": "New, abnormal growth (tumor) — can be benign or malignant",
        "correct": true
      },
      {
        "text": "Cell death (that would be necrosis)",
        "correct": false
      },
      {
        "text": "Excessive normal cell growth (that would be hyperplasia)",
        "correct": false
      },
      {
        "text": "Decreased cell growth (that would be hypoplasia)",
        "correct": false
      }
    ],
    "explanation": "Neo- = new, -plasia = growth/formation. Neoplasia encompasses all tumor types: benign (lipoma, adenoma) and malignant (carcinoma, sarcoma). Hyperplasia is increased but normal cell growth; neoplasia is autonomous, unregulated growth.",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.21",
    "category": "Veterinary Medical Terminology",
    "question": "The abbreviation \"PRN\" means:",
    "answers": [
      {
        "text": "Pro re nata — \"as needed\" (given only when necessary based on symptoms)",
        "correct": true
      },
      {
        "text": "Per rectum nightly",
        "correct": false
      },
      {
        "text": "Pre-operative right now",
        "correct": false
      },
      {
        "text": "Post-renal nephritis",
        "correct": false
      }
    ],
    "explanation": "PRN = pro re nata (as the situation demands). Used for medications given as-needed rather than on a fixed schedule. Example: \"Tramadol 50 mg PO PRN for pain\" means give only when the patient shows signs of pain, not on a scheduled basis.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Standard veterinary prescription abbreviations"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.22",
    "category": "Veterinary Medical Terminology",
    "question": "The abbreviation \"NPO\" means:",
    "answers": [
      {
        "text": "Nil per os — nothing by mouth (the patient should not eat or drink)",
        "correct": true
      },
      {
        "text": "Normal post-operative",
        "correct": false
      },
      {
        "text": "No prescription ordered",
        "correct": false
      },
      {
        "text": "Non-pathogenic organism",
        "correct": false
      }
    ],
    "explanation": "NPO = nil per os (nothing by mouth). Used pre-operatively (typically NPO for food 8-12 hours before anesthesia, water 2-4 hours) or for patients with GI conditions requiring bowel rest. Always confirm specific NPO instructions for each case.",
    "sources": [
      {
        "name": "McCurnin's Clinical Textbook for Veterinary Technicians"
      },
      {
        "name": "Standard veterinary abbreviations"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.23",
    "category": "Veterinary Medical Terminology",
    "question": "The directional term \"palmar\" refers to:",
    "answers": [
      {
        "text": "The caudal surface of the forelimb below the carpus (equivalent to the palm of the hand)",
        "correct": true
      },
      {
        "text": "The caudal surface of the hindlimb below the tarsus (that would be plantar)",
        "correct": false
      },
      {
        "text": "The dorsal surface of any limb",
        "correct": false
      },
      {
        "text": "Toward the nose",
        "correct": false
      }
    ],
    "explanation": "Below the carpus (front limb): palmar = back surface, dorsal = front surface. Below the tarsus (hind limb): plantar = back surface, dorsal = front surface. These replace cranial/caudal terminology for the distal extremities.",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      },
      {
        "name": "Veterinary Anatomy textbooks"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.24",
    "category": "Veterinary Medical Terminology",
    "question": "The term \"hepatomegaly\" means:",
    "answers": [
      {
        "text": "Enlargement of the liver",
        "correct": true
      },
      {
        "text": "Inflammation of the liver (that would be hepatitis)",
        "correct": false
      },
      {
        "text": "Removal of the liver (that would be hepatectomy)",
        "correct": false
      },
      {
        "text": "A liver tumor (that would be hepatoma)",
        "correct": false
      }
    ],
    "explanation": "Hepat/o = liver, -megaly = enlargement. Hepatomegaly = enlarged liver. Similarly: splenomegaly = enlarged spleen, cardiomegaly = enlarged heart. Causes include congestion, neoplasia, infection, and metabolic disease.",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q12.25",
    "category": "Veterinary Medical Terminology",
    "question": "The prefix \"poly-\" means:",
    "answers": [
      {
        "text": "Many or excessive",
        "correct": true
      },
      {
        "text": "Few or deficient (that would be oligo-)",
        "correct": false
      },
      {
        "text": "Without (that would be a-)",
        "correct": false
      },
      {
        "text": "Painful (that would be dys-)",
        "correct": false
      }
    ],
    "explanation": "Poly- = many/excessive. Examples: polydipsia (excessive drinking), polyuria (excessive urination), polyphagia (excessive eating), polycythemia (too many red blood cells). The opposite is oligo- (few/scanty): oliguria, oligodipsia.",
    "sources": [
      {
        "name": "Medical Terminology for Veterinary Technicians (Romich)"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.1",
    "category": "Scope of Practice (Washington State)",
    "question": "Under Washington State law (WAC 246-935-050), which of the following is a licensed veterinary technician PROHIBITED from doing?",
    "answers": [
      {
        "text": "Diagnosing a disease or condition",
        "correct": true
      },
      {
        "text": "Inducing and maintaining anesthesia under direct supervision",
        "correct": false
      },
      {
        "text": "Placing an IV catheter",
        "correct": false
      },
      {
        "text": "Performing a fecal flotation",
        "correct": false
      }
    ],
    "explanation": "WAC 246-935-050 explicitly prohibits veterinary technicians from: diagnosing, prognosing, prescribing drugs or appliances, and performing surgery (with limited exceptions). These are reserved for the licensed veterinarian.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.2",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, a licensed veterinary technician may induce and maintain anesthesia under which level of supervision?",
    "answers": [
      {
        "text": "Direct supervision — the veterinarian must be on the premises and quickly available",
        "correct": true
      },
      {
        "text": "No supervision — technicians can independently anesthetize patients",
        "correct": false
      },
      {
        "text": "Immediate supervision — the veterinarian must be physically present and watching",
        "correct": false
      },
      {
        "text": "Indirect supervision — the veterinarian need not be on premises",
        "correct": false
      }
    ],
    "explanation": "Anesthesia induction and maintenance requires direct supervision (veterinarian on premises, quickly available but not necessarily watching). This distinguishes it from tasks like dental extractions which require immediate supervision (vet physically present and observing).",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.3",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, dental extractions performed by a licensed veterinary technician require:",
    "answers": [
      {
        "text": "Immediate supervision — the veterinarian must be physically present and directly observing",
        "correct": true
      },
      {
        "text": "No supervision",
        "correct": false
      },
      {
        "text": "Indirect supervision only",
        "correct": false
      },
      {
        "text": "Dental extractions cannot be performed by technicians under any circumstances",
        "correct": false
      }
    ],
    "explanation": "Dental extractions are one of the highest-supervision tasks allowed for LVTs in Washington State, requiring immediate supervision (veterinarian physically present and observing the procedure). This is the most restrictive supervision level.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.4",
    "category": "Scope of Practice (Washington State)",
    "question": "A veterinarian leaves the building for lunch. Under WAC 246-935-050, which task can a licensed veterinary technician still perform?",
    "answers": [
      {
        "text": "IV injection into an uncatheterized vein (requires only indirect supervision — vet available for consultation)",
        "correct": true
      },
      {
        "text": "Inducing anesthesia on the next surgical patient (requires direct supervision)",
        "correct": false
      },
      {
        "text": "Performing a dental extraction (requires immediate supervision)",
        "correct": false
      },
      {
        "text": "Diagnosing the next patient's condition (prohibited for technicians)",
        "correct": false
      }
    ],
    "explanation": "Indirect supervision means the veterinarian is not necessarily on premises but is available for consultation (e.g., by phone). Tasks like IV injections into uncatheterized veins, diagnostic procedures (fecals, urinalysis, ECG), and bladder catheterization only require indirect supervision.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.5",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, an unregistered veterinary assistant (non-credentialed staff) may:",
    "answers": [
      {
        "text": "Perform tasks delegated by the veterinarian under at least indirect supervision by a veterinarian or licensed veterinary technician, EXCEPT tasks specifically restricted to LVTs",
        "correct": true
      },
      {
        "text": "Perform all tasks identical to a licensed veterinary technician",
        "correct": false
      },
      {
        "text": "Work completely independently without any supervision",
        "correct": false
      },
      {
        "text": "Diagnose and prescribe if trained on the job",
        "correct": false
      }
    ],
    "explanation": "Unregistered assistants work under at least indirect supervision and may perform general tasks (restraint, cleaning, feeding, taking vitals). However, they CANNOT perform tasks specifically restricted to licensed veterinary technicians (anesthesia, dental extractions, certain injections, etc.).",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.6",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, who may prescribe medications in Washington State?",
    "answers": [
      {
        "text": "Only the licensed veterinarian — technicians and assistants are explicitly prohibited from prescribing",
        "correct": true
      },
      {
        "text": "Licensed veterinary technicians with 5+ years experience",
        "correct": false
      },
      {
        "text": "Any staff member trained by the veterinarian",
        "correct": false
      },
      {
        "text": "Veterinary assistants under indirect supervision",
        "correct": false
      }
    ],
    "explanation": "Prescribing drugs or appliances is one of the explicitly prohibited acts for all non-veterinarian staff, regardless of their level of training, licensure, or experience. Only a licensed veterinarian (DVM/VMD) may prescribe.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.7",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, a licensed veterinary technician may suture skin or gingiva under which supervision level?",
    "answers": [
      {
        "text": "Direct supervision — the veterinarian must be on the premises and quickly available",
        "correct": true
      },
      {
        "text": "No supervision",
        "correct": false
      },
      {
        "text": "Immediate supervision",
        "correct": false
      },
      {
        "text": "Technicians cannot suture under any circumstances",
        "correct": false
      }
    ],
    "explanation": "Suturing skin or gingiva is permitted for licensed veterinary technicians under direct supervision (veterinarian on premises, quickly available). This is a technical procedure that requires the vet to be accessible for questions or complications but doesn't require direct observation.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.8",
    "category": "Scope of Practice (Washington State)",
    "question": "Under Washington State law, a veterinary technician may initiate treatment on a patient without prior veterinary instruction ONLY in:",
    "answers": [
      {
        "text": "An emergency situation where the animal's life is in immediate danger and the veterinarian is not available",
        "correct": true
      },
      {
        "text": "Any situation where the tech feels confident",
        "correct": false
      },
      {
        "text": "Routine appointments that follow standard protocols",
        "correct": false
      },
      {
        "text": "Technicians can never initiate any treatment",
        "correct": false
      }
    ],
    "explanation": "WAC 246-935-050 prohibits technicians from initiating treatment without prior instruction EXCEPT in life-threatening emergencies when the veterinarian cannot be reached. This exception recognizes that delaying treatment could result in patient death.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.9",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, which of the following requires only INDIRECT supervision for a licensed veterinary technician?",
    "answers": [
      {
        "text": "Performing a cystocentesis (bladder centesis)",
        "correct": true
      },
      {
        "text": "Inducing general anesthesia",
        "correct": false
      },
      {
        "text": "Performing a dental extraction",
        "correct": false
      },
      {
        "text": "Diagnosing a patient's condition",
        "correct": false
      }
    ],
    "explanation": "Centesis procedures (abdominal, thoracic, cystocentesis), including fine needle aspirates, require only indirect supervision for licensed veterinary technicians in Washington State. The veterinarian need not be on premises but must be available for consultation.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.10",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, blood product administration requires which level of supervision?",
    "answers": [
      {
        "text": "Direct supervision — the veterinarian must be on the premises and quickly available",
        "correct": true
      },
      {
        "text": "Indirect supervision",
        "correct": false
      },
      {
        "text": "No supervision required",
        "correct": false
      },
      {
        "text": "Only veterinarians may administer blood products",
        "correct": false
      }
    ],
    "explanation": "Administering blood products (transfusions) carries significant risk for adverse reactions and requires direct supervision. The veterinarian must be on premises and quickly available to manage potential transfusion reactions.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.11",
    "category": "Scope of Practice (Washington State)",
    "question": "Under Washington State law, controlled substance records must include all of the following EXCEPT:",
    "answers": [
      {
        "text": "The client's social security number",
        "correct": true
      },
      {
        "text": "Date and quantity dispensed or administered",
        "correct": false
      },
      {
        "text": "Patient identification",
        "correct": false
      },
      {
        "text": "Name of the prescribing veterinarian",
        "correct": false
      }
    ],
    "explanation": "DEA and state regulations require controlled substance logs to include: date, drug name, quantity used/dispensed, patient/client identification, prescribing veterinarian, and remaining inventory. Social security numbers are never required for veterinary controlled substance records.",
    "sources": [
      {
        "name": "DEA Controlled Substance regulations"
      },
      {
        "name": "WAC 246-935"
      },
      {
        "name": "https://www.deadiversion.usdoj.gov/",
        "url": "https://www.deadiversion.usdoj.gov/"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.12",
    "category": "Scope of Practice (Washington State)",
    "question": "In Washington State, the rabies vaccination certificate must be signed by:",
    "answers": [
      {
        "text": "The licensed veterinarian — not the veterinary technician, even if the tech administered the vaccine",
        "correct": true
      },
      {
        "text": "The veterinary technician who administered the vaccine",
        "correct": false
      },
      {
        "text": "The pet owner",
        "correct": false
      },
      {
        "text": "Any clinic staff member",
        "correct": false
      }
    ],
    "explanation": "Even though a licensed veterinary technician may physically administer the rabies vaccine, the rabies certificate must be signed by the supervising licensed veterinarian. The certificate is a legal document attesting to vaccination under a valid veterinarian-client-patient relationship.",
    "sources": [
      {
        "name": "WAC 246-100-197"
      },
      {
        "name": "Washington State Department of Health rabies guidelines"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.13",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, placing arterial catheters and central venous catheters requires:",
    "answers": [
      {
        "text": "Direct supervision — the veterinarian must be on premises and quickly available",
        "correct": true
      },
      {
        "text": "Indirect supervision only",
        "correct": false
      },
      {
        "text": "Immediate supervision (vet physically present watching)",
        "correct": false
      },
      {
        "text": "These procedures cannot be performed by technicians",
        "correct": false
      }
    ],
    "explanation": "Arterial and central venous catheter placement are advanced technical procedures permitted for licensed veterinary technicians under direct supervision. Standard peripheral IV catheters do not have this same specific restriction and may be placed under indirect supervision.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.14",
    "category": "Scope of Practice (Washington State)",
    "question": "A scenario: A client calls asking what's wrong with their vomiting dog and what medication to give. Under WAC 246-935-050, the veterinary technician should:",
    "answers": [
      {
        "text": "Advise the client to bring the dog in for examination — the technician cannot diagnose over the phone or prescribe medications",
        "correct": true
      },
      {
        "text": "Diagnose the likely problem and recommend an over-the-counter medication",
        "correct": false
      },
      {
        "text": "Call in a prescription to the pharmacy on the veterinarian's behalf without consulting them",
        "correct": false
      },
      {
        "text": "Tell the client the dog is fine and to wait a week",
        "correct": false
      }
    ],
    "explanation": "Diagnosing (determining what's wrong) and prescribing (recommending specific medications) are explicitly prohibited for technicians. The appropriate response is to recommend an examination, offer to triage with the veterinarian, and relay any urgent concerns.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.15",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, \"direct supervision\" is defined as:",
    "answers": [
      {
        "text": "The veterinarian is on the premises and is quickly and easily available",
        "correct": true
      },
      {
        "text": "The veterinarian is physically in the room watching the procedure",
        "correct": false
      },
      {
        "text": "The veterinarian is available by phone but may be off-site",
        "correct": false
      },
      {
        "text": "The veterinarian reviewed the patient earlier that day",
        "correct": false
      }
    ],
    "explanation": "Direct supervision = veterinarian on premises and quickly available. Immediate supervision = physically present and directly observing. Indirect supervision = available for communication/consultation but not necessarily on premises. These distinctions determine which tasks a tech can perform.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.16",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, floating teeth (equilibrating dental arcades) performed by a licensed veterinary technician requires:",
    "answers": [
      {
        "text": "Direct supervision",
        "correct": true
      },
      {
        "text": "Indirect supervision",
        "correct": false
      },
      {
        "text": "No supervision",
        "correct": false
      },
      {
        "text": "Immediate supervision",
        "correct": false
      }
    ],
    "explanation": "Floating teeth (equine dental equilibration) requires direct supervision for licensed veterinary technicians in Washington State. The veterinarian must be on premises and quickly available during the procedure.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.17",
    "category": "Scope of Practice (Washington State)",
    "question": "Under Washington State law, a licensed veterinary technician performing ophthalmic diagnostic procedures (Schirmer tear test, fluorescein staining, tonometry) needs:",
    "answers": [
      {
        "text": "Indirect supervision — the veterinarian need not be on premises but must be available for consultation",
        "correct": true
      },
      {
        "text": "Immediate supervision",
        "correct": false
      },
      {
        "text": "Direct supervision",
        "correct": false
      },
      {
        "text": "These cannot be performed by technicians",
        "correct": false
      }
    ],
    "explanation": "Basic ophthalmic diagnostic procedures (tear tests, topical anesthetic application, fluorescein staining, tonometry) are categorized as diagnostic procedures requiring only indirect supervision for licensed veterinary technicians.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.18",
    "category": "Scope of Practice (Washington State)",
    "question": "A scenario: It is 2 AM and a dog is brought in with a blocked urethra. The veterinarian is 30 minutes away. Under WAC 246-935-050, the licensed veterinary technician may:",
    "answers": [
      {
        "text": "Initiate emergency stabilization (IV catheter, fluids, pain management) because this is a life-threatening emergency, while the veterinarian is contacted and en route",
        "correct": true
      },
      {
        "text": "Do nothing until the veterinarian physically arrives",
        "correct": false
      },
      {
        "text": "Perform urethral catheterization, diagnose the condition, and prescribe post-procedure medications",
        "correct": false
      },
      {
        "text": "Send the client home until the veterinarian is available",
        "correct": false
      }
    ],
    "explanation": "The emergency exception allows technicians to initiate treatment when an animal's life is in immediate danger and the vet is unavailable. Stabilization (IV access, fluids, monitoring) is appropriate. However, diagnosis and prescribing remain prohibited even in emergencies.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.19",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, which of the following may an unregistered veterinary assistant NEVER perform, regardless of supervision level?",
    "answers": [
      {
        "text": "Inducing or maintaining general anesthesia",
        "correct": true
      },
      {
        "text": "Restraining patients for procedures",
        "correct": false
      },
      {
        "text": "Cleaning cages and feeding patients",
        "correct": false
      },
      {
        "text": "Taking a patient's temperature and weight",
        "correct": false
      }
    ],
    "explanation": "Anesthesia induction and maintenance is specifically restricted to licensed veterinary technicians (not assistants) under direct supervision. Unregistered assistants may perform general care tasks (restraint, feeding, cleaning, basic vitals) but NOT tasks specifically designated for LVTs only.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  },
  {
    "id": "Q13.20",
    "category": "Scope of Practice (Washington State)",
    "question": "Under WAC 246-935-050, prognosis (predicting the outcome of a disease or condition) may be communicated to the client by:",
    "answers": [
      {
        "text": "Only the licensed veterinarian — prognosis is explicitly restricted from technician scope",
        "correct": true
      },
      {
        "text": "Any licensed veterinary technician",
        "correct": false
      },
      {
        "text": "Experienced veterinary assistants",
        "correct": false
      },
      {
        "text": "Any staff member trained in client communication",
        "correct": false
      }
    ],
    "explanation": "Prognosis (predicting the likely course or outcome of a disease) is one of the explicitly prohibited acts for veterinary technicians and assistants, alongside diagnosis and prescribing. Only the veterinarian may communicate prognosis to the client.",
    "sources": [
      {
        "name": "WAC 246-935-050",
        "url": "https://app.leg.wa.gov/wac/default.aspx?cite=246-935-050"
      }
    ],
    "sourceInferred": false
  }
];
