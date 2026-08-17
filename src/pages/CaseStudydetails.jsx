import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ✅ LOCAL IMAGES KAISE IMPORT KAREIN (EXAMPLE):
import paschimvihar from "../assets/casestudy/paschimvihar.jpg";
import barlin from "../assets/casestudy/barlin.jpeg";
import dotdelhi from "../assets/casestudy/dotdelhi.jpeg";
import iitkanpuir from "../assets/casestudy/iitkanpuir.png";
import shaimandir from "../assets/casestudy/shaimandir.png";
import x from "../assets/casestudy/x.jpeg";
import romlane from "../assets/casestudy/romlane.jpeg"
import anytime from "../assets/casestudy/anytime.jpeg"
import kksport from "../assets/casestudy/kksport.png";
import kris from "../assets/casestudy/kris.jpg";
import iitmandi from "../assets/casestudy/iitmandi.jpg";
import max from "../assets/casestudy/max.jpg";
import nannital2 from "../assets/casestudy/nannital2.jpeg";
import studebar from "../assets/casestudy/studebar.JPG";
import nasik2 from "../assets/casestudy/nasik2.jpeg";
import aviraj from "../assets/casestudy/aviraj.jpeg";
import she2 from "../assets/casestudy/she2.png";
import gold2 from "../assets/casestudy/gold2.jpg";
import mumbai from "../assets/casestudy/mumbai.jpeg";
import man2 from "../assets/casestudy/man2.png";
import dps from "../assets/casestudy/dps.jpeg";
import mocha2 from "../assets/casestudy/mocha2.png";
import kibo from "../assets/casestudy/kibo.png";
import noida from "../assets/casestudy/noida.png";
import one82 from "../assets/casestudy/one82.png";

import oral2 from "../assets/casestudy/oral2.png";

import dragon from "../assets/casestudy/dragon.png";
import khalsa2 from "../assets/casestudy/khalsa2.png";
import demopune2 from "../assets/new/demopune2.JPG";

import pss from "../assets/casestudy/pss.jpg";
import btc from "../assets/casestudy/btc.png";
import assound from "../assets/casestudy/assound.png";

import balancebox from "../assets/casestudy/balancebox.png";



//khalsa2

// kibo



// ✅ SARE 7 PROJECTS KI UNIQUE IDs AUR FORMATTED DATA
const caseStudies = [
  {
    id: "gym-paschim-vihar",
    title: "EMINENT AV DELIVERS MULTI-ZONE GYM AUDIO INSTALLATION IN PASCHIM VIHAR",

    // ✅ LOCAL IMAGE LAGANE KA TARIKA:
    // Agar aapne upar import kiya hai, toh bina quotes ke aise likhein:
    // img: gymPaschimImg,

    img: [paschimvihar],
    details:
      "Eminent AV completed the design, installation, and commissioning of a professional audio system at a large-format fitness centre in Paschim Vihar, New Delhi. The project marks the company's fourth consecutive installation for the same gym franchise, following earlier deployments at Kirti Nagar, Gurugram Sector 66, and Ashok Vihar.\n\n" +
      "The client brief called for the deployment of high-performance audio capable of supporting high-energy fitness activities across a multi-zonal, 24x7 operational space. Eminent AV was approached directly by the client and handled the project end-to-end, without the involvement of external consultants or third-party vendors.\n\n" +
      "Spanning approximately 10,000 sq ft across two floors, the gym features a strength and cardio section on the upper level, with a dedicated studio and warm-up area on the lower level. Given the varied functional requirements of each zone, the system was designed to deliver both consistent background coverage and higher output levels for instructor-led sessions and strength training environments.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "Based on the brief, Eminent AV proposed a mixed-brand solution featuring Amate Audio (Spain) and Louis Martin (Italy). Amate Audio was deployed across the cardio and strength areas, while Louis Martin systems were selected for the studio spaces and low-frequency reinforcement. According to the integrator, Amate Audio's established presence in the hospitality and fitness segments, along with its Spain-based manufacturing, contributed to its suitability for large-area coverage, while Louis Martin products addressed the higher SPL and performance requirements of studio-based workouts.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio Nitid S6LP Loudspeakers (Indoor Coverage) | 12 Units\n" +
      "• Louis Martin F8 Loudspeakers (Studio Areas) | 4 Units\n" +
      "• Louis Martin S18 Subwoofers (Low-Frequency Support) | 5 Units\n" +
      "• Amate Audio LMS206 DSP Units (Signal Processing) | 2 Units\n" +
      "• Louis Martin Amplifiers (System Power Handling) | As Required\n\n" +
      "Speaker placement and coverage design were customised to ensure even sound distribution across both floors while maintaining clarity and intelligibility during peak operational hours. The system was configured to support high-energy playback, particularly during strength training and group fitness sessions.\n\n" +
      "Post-installation feedback from the client has been positive, with particular emphasis on system performance, configuration, and after-sales support. Eminent AV notes that the successful execution of the project has resulted in an additional upcoming installation for the same client, reinforcing a long-standing professional relationship.",
  },
  {
    id: "hospitality-berlin-haus",
    title: "PREMIUM AUDIO INSTALLATION AT BERLIN HAUS DE GOURMET, DEHRADUN",
    img: [barlin],
    details:
      "Berlin Haus de Gourmet, Dehradun, has redefined its dining ambience with a bespoke Amate Audio system designed for elegance and performance. The venue required a seamless high-performance audio setup capable of delivering consistent coverage and warm acoustics across its multi-zonal spaces.\n\n" +
      "Spanning across distinct architectural layouts, the venue features a premium indoor dining area and an expansive outdoor terrace. The system was engineered to maintain exceptional sound clarity from intimate dining moments to high-energy open-air gatherings, all while preserving the venue's sophisticated aesthetic integrity.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "Based on the technical layout, a comprehensive, high-end audio solution featuring Amate Audio (Spain) was deployed. The installation utilizes specific product lines for indoor and outdoor reinforcement, managed by advanced DSP for precise control. Challenges such as complex wiring, architectural coordination, and multi-zone tuning were expertly managed to preserve the venue’s visual appeal.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S15P, S26P, and S218WP Loudspeakers (Indoor) | As Required\n" +
      "• Amate Audio N12P7, S18WP, and G7 Loudspeakers (Outdoor Terrace) | As Required\n" +
      "• Amate Audio LMS206 DSP Units (Signal Processing & Control) | As Required\n" +
      "• Amate Audio HD1200, HD3200, HD4000 Amplifiers | As Required\n\n" +
      "Each component was strategically placed to blend with the décor while achieving optimal acoustic performance. The result is a refined soundscape that enhances the restaurant’s luxurious atmosphere and guest experience.\n\n" +
      "Berlin Haus de Gourmet now stands as a benchmark for how premium audio can elevate hospitality environments. Amate Audio – Elevating Hospitality Experiences.",
  },
  {
    id: "hospitality-dot-delhi",
    title: "PREMIUM AUDIO INSTALLATION AT DOT, DELHI POWERED BY LOUIS MARTIN",
    img: [dotdelhi],
    details:
      "DOT in Delhi has recently upgraded its acoustic environment with a high-performance audio installation powered exclusively by Louis Martin (Italy). The venue required a robust and dynamic sound system to ensure premium audio quality, providing an immersive and energetic experience for its patrons.\n\n" +
      "To meet the venue's specific acoustical requirements, a comprehensive sound reinforcement system was deployed. The installation was carefully planned to deliver crystal-clear mid-highs and powerful low-frequency support, ensuring balanced and even coverage across the entire space.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "The project features a dedicated Louis Martin (Italy) audio setup, renowned for its reliability and high SPL capabilities. The deployment includes a combination of RED 9 and Q60 loudspeakers for exceptional clarity, supported by KS218 subwoofers for deep, impactful bass. The entire system is driven by a dedicated network of powerful amplifiers and precisely tuned using a digital processor.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin RED 9 Loudspeakers | 6 Units\n" +
      "• Louis Martin Q60 Line Array | 4 Units\n" +
      "• Louis Martin KS218 Subwoofers | 2 Units\n" +
      "• Louis Martin TTA300 Amplifiers | 2 Units\n" +
      "• Louis Martin TIP 1002 Amplifier | 1 Units\n" +
      "• Louis Martin TIP 2024 Amplifier | 1 Units\n" +
      "• Louis Martin DL2.6 Digital Controller | 1 Units\n\n" +
      "Through strategic placement and professional system tuning via the DL2.6 processor, the audio setup at 1 DOT achieves optimal sound distribution and peak performance. This installation reinforces the venue's vibe and stands as a testament to Louis Martin's capability to deliver top-tier audio experiences for dynamic entertainment spaces.",
  },
  {
    id: "gym-24hours-paschim",
    title: "24 HOURS FITNESS CENTRE, ASHOK VIHAR – MULTI-ZONE AUDIO",
    img: [paschimvihar],
    details:
      "A premium 24-hour fitness centre located in Paschim Vihar, New Delhi, has been equipped with a state-of-the-art professional audio system. The facility required a robust and versatile sound setup capable of supporting high-energy workouts and instructor-led sessions around the clock.\n\n" +
      "To cater to the distinct acoustic requirements of different workout zones, the system was designed to deliver both consistent background coverage across cardio sections and high-impact output for strength training and dedicated studio areas.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A hybrid, high-performance solution was deployed featuring Amate Audio (Spain) and Louis Martin (Italy). Amate Audio speakers were selected for their wide and clear indoor coverage, while Louis Martin systems were integrated to handle the higher SPL demands and low-frequency reinforcement. To give trainers seamless control over the audio during group sessions, professional mixing consoles were also integrated into the setup.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S6LP Loudspeakers | 12 Units\n" +
      "• Louis Martin F8 Loudspeakers | 4 Units\n" +
      "• Louis Martin S18 Subwoofers | 5 Units\n" +
      "• Louis Martin TTA 300 Amplifier | 1 Units\n" +
      "• Louis Martin TTA 500 Amplifier | 1 Units\n" +
      "• Louis Martin TIP 1602 Amplifier | 1 Units\n" +
      "• DL6.2 Digital Signal Processors (DSP) | 2 Units\n" +
      "• MG10XU Mixing Console | 1 Units\n" +
      "• MG06XA Mixing Console | 1 Units\n\n" +
      "The entire system was meticulously tuned using dual DL6.2 DSPs to ensure optimal sound distribution, clarity, and deep bass without distortion. The result is a highly motivating, reliable, 24x7 audio environment that perfectly complements the dynamic atmosphere of the fitness centre.",
  },
  {
    id: "education-iit-kanpur",
    category: "gov",
    title: "PROFESSIONAL AUDIO INSTALLATION AT IIT KANPUR",
    img: [iitkanpuir],
    details:
      "Indian Institute of Technology (IIT) Kanpur, one of India's premier educational institutions, recently upgraded one of its key facilities with a high-performance professional audio system. The requirement called for a versatile sound setup capable of delivering pristine vocal clarity for academic presentations as well as dynamic sound reinforcement for events.\n\n" +
      "To address the acoustical challenges of the institutional space, the system was engineered to provide highly intelligible sound reproduction with even coverage. The design ensures that whether it is a lecture, seminar, or media playback, the audio remains crisp and balanced across the entire audience area.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A premium audio solution was deployed, carefully balancing full-range enclosures with dedicated low-frequency support. The setup features a combination of COX12 speakers for precise main coverage, alongside compact F8 and HW6.5 loudspeakers for optimal fill and zonal distribution. To provide a rich and impactful low-end presence, S18 subwoofers were seamlessly integrated, all driven by robust professional amplifiers.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• COX12 Loudspeakers | 2 Units\n" +
      "• F8 Loudspeakers | 2 Units\n" +
      "• HW6.5 Loudspeakers | 2 Units\n" +
      "• S18 Subwoofers (Low-Frequency Support) | 2 Units\n" +
      "• TIP 1002 Amplifiers | 2 Units\n" +
      "• D4200 Amplifier | 1 Units\n\n" +
      "Through strategic placement and professional system tuning, the installation at IIT Kanpur achieves optimal sound distribution, maximum reliability, and a top-tier auditory experience perfectly suited for a world-class academic environment.",
  },
  {
    id: "worship-saibaba-mandir",
    title: "AUDIO REINFORCEMENT AT SHREE SAI BABA MANDIR, LODHI COLONY, DELHI",
    img: [shaimandir],
    details:
      "Shree Sai Baba Mandir, located in Lodhi Colony, New Delhi, recently upgraded its audio infrastructure to enhance the spiritual experience for visiting devotees. The venue required a sound system that could seamlessly blend into the sacred environment while delivering pristine audio quality.\n\n" +
      "The primary acoustic requirement was to ensure crystal-clear vocal reproduction for daily aartis, bhajans, and temple announcements. It was crucial that the sound remained warm, evenly distributed, and free from harshness to maintain the serene and peaceful atmosphere of the temple.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A dedicated professional audio setup was deployed to achieve maximum speech intelligibility and musical warmth. The installation features a distributed network of F8 and F10 full-range loudspeakers placed strategically across the premises for even coverage. An S18 subwoofer was also integrated to add low-frequency depth and richness to live bhajan performances and musical instruments, all powered by a robust TTA series amplifier.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• F10 Loudspeakers | 2 Units\n" +
      "• F8 Loudspeakers | 7 Units\n" +
      "• S18 Subwoofer (Low-Frequency Support) | 1 Units\n" +
      "• TTA 800 Amplifier (System Power Handling) | 1 Units\n\n" +
      "Carefully calibrated for the temple's unique architecture, the system ensures that every chant and prayer resonates clearly throughout the complex. The successful installation provides a highly immersive and tranquil auditory environment, enriching the daily worship experience for the entire congregation.",
  },
  {
    id: "gym-sk-fitness",
    title: "HIGH-ENERGY AUDIO DEPLOYMENT AT SK FITNESS, TAGORE GARDEN",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    details:
      "SK Fitness, located in the bustling area of Tagore Garden, New Delhi, has been equipped with a massive, high-performance professional audio system. The fitness club required an electrifying and immersive soundscape capable of driving high-intensity workouts and energizing the entire gym floor.\n\n" +
      "To meet the demanding acoustic requirements of a large-format fitness space, the system was designed to deliver extreme clarity at high SPL (Sound Pressure Levels) along with deep, chest-thumping bass that is essential for modern fitness and cardio environments.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile mixed-brand solution was deployed to handle the heavy audio requirements. The installation prominently features Amate Audio S26P enclosures for pristine and wide mid-high coverage, complemented by a large array of F8 loudspeakers for dedicated zonal fills. To achieve the intense low-frequency impact required for the gym, a heavy combination of S218 (Dual 18-inch) and S18 (Single 18-inch) subwoofers was integrated. The entire system is powered by a robust rack of heavy-duty amplifiers and managed by dual digital processors for precise tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S26P Loudspeakers | 6 Units\n" +
      "• F8 Loudspeakers (Zonal/Studio Fills) | 8 Units\n" +
      "• S218 Dual 18-Inch Subwoofers | 2 Units\n" +
      "• S18 Single 18-Inch Subwoofers | 2 Units\n" +
      "• TTA 500 Amplifiers | 2 Units\n" +
      "• D300 Amplifiers | 2 Units\n" +
      "• TIP 1602 / TIP 1002 Amplifiers | 3 Units\n" +
      "• DL2.6 Digital Signal Processors (DSP) | 2 Units\n" +
      "• MG10XU & MG06X Mixing Consoles | 2 Units\n\n" +
      "Professionally calibrated utilizing the dual DL2.6 DSP units, the setup ensures that the audio remains punchy, distortion-free, and balanced across all workout zones. With dedicated mixing consoles for trainer control, SK Fitness now boasts a highly motivating auditory environment that significantly elevates the member experience.",
  },
  {
    id: "education-100x-school",
    title: "PROFESSIONAL AUDIO INSTALLATION AT 100X SCHOOL",
    img: [x],
    details:
      "100x School recently upgraded its auditory infrastructure with a high-performance professional sound system. The institution required a reliable and articulate audio setup to ensure crystal-clear communication during assemblies, presentations, and school events.\n\n" +
      "To address the specific acoustical needs of the educational space, the system was designed to deliver exceptional vocal intelligibility and even sound distribution, ensuring that every student and staff member experiences pristine audio without fatigue.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A streamlined yet powerful audio solution was deployed to meet the school's requirements. The installation features a combination of full-range enclosures, including F15 and F8 loudspeakers, strategically positioned for optimal coverage. The entire system is powered by a robust TIP 1602 amplifier and meticulously managed by a digital processor to eliminate feedback and tune the room perfectly.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• F15 Loudspeakers (Main Coverage) | 2 Units\n" +
      "• F8 Loudspeakers (Fill/Zonal Coverage) | 2 Units\n" +
      "• TIP 1602 Amplifier (System Power Handling) | 1 Units\n" +
      "• DL2.6 Digital Signal Processor (DSP) | 1 Units\n\n" +
      "Professionally calibrated utilizing the DL2.6 DSP, the setup ensures that the audio remains balanced and clear across the entire venue. This new installation provides 100x School with a top-tier auditory environment, perfectly suited for modern educational activities.",
  },
  {
    id: "hospitality-romeo-lane-raipur",
    title: " ROMEO LANE, RAIPUR",
    img: [romlane],
    details:
      "Romeo Lane, a premier dining and nightlife destination in Raipur, has significantly elevated its acoustic environment with a massive, high-performance professional audio installation. The venue required a versatile sound system capable of delivering warm, ambient music during dining hours and transforming into a high-energy, club-level sonic experience as the night progresses.\n\n" +
      "To meet the demanding acoustic requirements of this large-format multi-zonal space, the system was designed to deliver extreme clarity at high SPL (Sound Pressure Levels) along with deep, chest-thumping bass that is essential for modern nightlife environments.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile mixed-brand solution was deployed to handle the heavy audio requirements. The core of the installation prominently features Amate Audio (Spain) enclosures, including S15, S26P, and G7 models for pristine and wide mid-high coverage across the main floors and outdoor zones. To achieve the intense low-frequency impact, a heavy combination of Amate S218 (Dual 18-inch) and S18 subwoofers was integrated. Furthermore, Louis Martin (Italy) RED series loudspeakers were strategically placed for dedicated zonal fills. The massive system is powered by a robust rack of heavy-duty Amate HD and TPD series amplifiers and managed by advanced digital processors for precise multi-zone tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S15 Loudspeakers (Main Coverage) | 2 Units\n" +
      "• Amate Audio S26P Loudspeakers (Wide Coverage) | 6 Units\n" +
      "• Amate Audio G7 Loudspeakers (Compact Fills) | 4 Units\n" +
      "• Louis Martin RED 12 Loudspeakers (Zonal Fills) | 2 Units\n" +
      "• Louis Martin RED 10 Loudspeakers (Zonal Fills) | 2 Units\n" +
      "• Amate Audio S218 Dual 18-Inch Subwoofers (Heavy LF Support) | 2 Units\n" +
      "• Amate Audio S18 Single 18-Inch Subwoofer (Distributed Bass) | 1 Unit\n" +
      "• Amate Audio HD1200 Amplifiers | 3 Units\n" +
      "• Amate Audio HD3200 Amplifier | 1 Unit\n" +
      "• Amate Audio HD400 Amplifiers | 2 Units\n" +
      "• Amate Audio TPD3K Amplifier | 1 Units\n" +
      "• Amate Audio LMS206 DSP Unit (Signal Processing & Control) | 1 Units\n\n" +
      "Professionally calibrated utilizing the LMS206 processor, the setup ensures that the audio remains punchy, distortion-free, and perfectly balanced across all distinct zones of the venue. Romeo Lane Raipur now boasts a highly dynamic and motivating auditory environment that significantly elevates the overall guest experience.",
  },
  {
    id: "gym-anytime-fitness",
    category: "gym",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT ANYTIME FITNESS",
    desc: "A dynamic and compact high-performance audio setup featuring Amate Audio and Louis Martin for a premium fitness environment.",
    img: [anytime],
    details:
      "Anytime Fitness, a globally recognized 24/7 fitness franchise, recently upgraded its audio system to provide an energizing and motivating workout environment for its members. The venue required a reliable sound setup capable of delivering consistent and high-quality audio across the gym floor.\n\n" +
      "The primary acoustic requirement was to deploy a compact yet powerful system that could deliver crisp mid-highs for general workout zones, while providing enough low-frequency punch to keep energy levels high during peak training hours.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A streamlined hybrid audio solution was engineered to meet the space's requirements without visually overpowering the gym's aesthetics. The installation utilizes Amate Audio's (Spain) highly efficient G7 loudspeakers for crystal-clear, wide-dispersion indoor coverage. To complement the mid-highs, a Louis Martin (Italy) S18 subwoofer was seamlessly integrated to handle the deep bass requirements, driven by a robust Louis Martin TTA 800 amplifier.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio G7 Loudspeakers (Wide Coverage) | 8 Units\n" +
      "• Louis Martin S18 Subwoofer (Low-Frequency Support) | 1 Units\n" +
      "• Louis Martin TTA 800 Amplifier (System Power Handling) | 1 Units\n\n" +
      "The strategic placement of the G7 enclosures combined with the heavy low-frequency support ensures a balanced, high-fidelity soundscape. The result is a premium and motivating auditory experience that perfectly aligns with the energetic, round-the-clock vibe of Anytime Fitness.",
  },
  {
    id: "kho-kho-sports-promotion-trust",
    category: "gov",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KHO KHO AND SPORTS PROMOTION TRUST, DELHI",
    desc: "A robust and dynamic professional audio setup tailored to deliver exceptional clarity and coverage for sporting events.",
    img: [kksport],
    details:
      "Kho Kho and Sports Promotion Trust, located in Delhi, recently upgraded its audio system to provide an engaging and clear auditory environment for its sporting events and administrative activities. The venue required a reliable sound setup capable of delivering consistent and high-quality audio across the facility.\n\n" +
      "The primary acoustic requirement was to deploy a powerful yet streamlined system that could deliver crisp vocal clarity for announcements and commentary, while providing enough low-frequency support to energize the atmosphere during matches and training sessions.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific requirements. The installation utilizes G7 loudspeakers for crystal-clear, wide-dispersion coverage. To complement the mid-highs, a highly efficient S12WP subwoofer was seamlessly integrated to handle the deep bass requirements, entirely driven by a robust TPD3K amplifier to ensure continuous peak performance.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• G7 Loudspeakers (Wide Coverage) | 6 Units\n" +
      "• S12WP Subwoofer (Low-Frequency Support) | 1 Units\n" +
      "• TPD3K Amplifier (System Power Handling) | 1 Units\n\n" +
      "The strategic placement of the G7 enclosures combined with dedicated low-frequency support ensures a balanced, high-fidelity soundscape. The result is a premium auditory experience that perfectly aligns with the energetic and competitive spirit of Kho Kho and Sports Promotion Trust.",
  },
  {
    id: "gym-kris-gethin-gurugram",
    category: "gym",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, GURUGRAM",
    desc: "A massive, high-performance professional audio system designed to deliver an electrifying and immersive fitness environment.",
    img: [kris],
    details:
      "Kris Gethin Gym, located in Gurugram, recently upgraded its audio system to provide an intensely energizing and motivating workout environment for its members. The premium fitness club required a massive sound setup capable of delivering club-level audio quality and high SPL across the entire gym floor.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity for general workout zones, while providing extreme, chest-thumping low-frequency punch to keep energy levels peaking during intense training sessions.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features a massive array of S26P and G7 loudspeakers for crystal-clear, wide-dispersion coverage. To achieve the intense low-frequency impact required, a heavy combination of S18WP and S12WP subwoofers was integrated. The entire system is driven by a robust and heavy-duty rack of amplifiers, including the TPD3K, HD4000, HD3200, and HD1200, ensuring continuous peak performance without distortion.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• S26P Loudspeakers (Premium Mid-High Coverage) | 8 Units\n" +
      "• G7 Loudspeakers (Zonal Fills & Wide Coverage) | 4 Units\n" +
      "• S18WP Subwoofers (Heavy Low-Frequency Support) | 2 Units\n" +
      "• S12WP Subwoofer (Dedicated Low-Frequency Punch) | 1 Units\n" +
      "• TPD3K Amplifier (System Power Handling) | 1 Units\n" +
      "• HD4000 Amplifier (Heavy-Duty Power Handling) | 1 Units\n" +
      "• HD3200 Amplifier (System Power Handling) | 1 Units\n" +
      "• HD1200 Amplifier (Zonal Power Handling) | 1 Units\n\n" +
      "The strategic placement of the high-performance enclosures combined with the massive subwoofer support ensures a balanced, distortion-free soundscape. The result is a premium, adrenaline-pumping auditory experience that perfectly aligns with the hardcore fitness culture of Kris Gethin Gym.",
  },
  {
    id: "gym-kris-gethin-kirti-nagar",
    category: "gym",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, KIRTI NAGAR",
    desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
    img: [kris],
    details:
      "Kris Gethin Gym, located in Kirti Nagar, recently upgraded its audio system to provide an intensely energizing and motivating workout environment for its members. The premium fitness club required a comprehensive sound setup capable of delivering club-level audio quality and high SPL across the entire gym floor.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity for general workout zones, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during intense training sessions.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features a large array of N10P and G7 loudspeakers for crystal-clear, wide-dispersion coverage, complemented by CS6FR units for targeted zonal fills. To achieve the intense low-frequency impact required, a heavy combination of N18WPR and N12 subwoofers was integrated to deliver deep, immersive bass throughout the facility.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• N10P Loudspeakers (Premium Mid-High Coverage) | 10 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 4 Units\n" +
      "• N18WPR Subwoofers (Heavy Low-Frequency Support) | 3 Units\n" +
      "• N12 Subwoofer (Dedicated Low-Frequency Punch) | 1 Units\n" +
      "• CS6FR Ceiling Speakers (Targeted Zonal Fills) | 2 Units\n\n" +
      "The strategic placement of the high-performance enclosures combined with the massive subwoofer support ensures a balanced, distortion-free soundscape. The result is a premium, adrenaline-pumping auditory experience that perfectly aligns with the hardcore fitness culture of Kris Gethin Gym in Kirti Nagar.",
  },
  {
    id: "gym-kris-gethin-dwarka",
    category: "gym",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KRIS GETHIN GYM, DWARKA",
    desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
    img: [kris],
    details:
      "Kris Gethin Gym, located in Dwarka, recently upgraded its audio system to provide an intensely energizing and motivating workout environment for its members. The premium fitness club required a comprehensive sound setup capable of delivering club-level audio quality and high SPL across the entire gym floor.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity for general workout zones, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during intense training sessions.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features a massive array of N26P loudspeakers for crystal-clear, wide-dispersion coverage, complemented by CS6FR ceiling units for targeted zonal fills. To achieve the intense low-frequency impact required, a heavy combination of S18WP subwoofers was integrated to deliver deep, immersive bass throughout the facility. The entire system is driven by robust HD400 amplifiers and precisely calibrated utilizing an LMS206 Digital Signal Processor.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• N26P Loudspeakers (Premium Mid-High Coverage) | 15 Units\n" +
      "• S18WP Subwoofers (Heavy Low-Frequency Support) | 3 Units\n" +
      "• HD400 Amplifiers (System Power Handling) | 2 Units\n" +
      "• LMS206 Digital Signal Processor (DSP) | 1 Units\n" +
      "• CS6FR Ceiling Speakers (Targeted Zonal Fills) | 6 Units\n\n" +
      "The strategic placement of the high-performance enclosures combined with the massive subwoofer support ensures a balanced, distortion-free soundscape. The result is a premium, adrenaline-pumping auditory experience that perfectly aligns with the hardcore fitness culture of Kris Gethin Gym in Dwarka.",
  },
  {
    id: "iit-mandi",
    category: "gov",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT IIT MANDI",
    desc: "A robust and precise professional audio setup tailored to deliver exceptional clarity and coverage for educational and institutional events.",
    img: [iitmandi],
    details:
      "IIT Mandi, a premier engineering institute, recently upgraded its audio system to provide an engaging and highly articulate auditory environment for its academic and administrative activities. The institution required a reliable sound setup capable of delivering consistent and premium audio quality across its designated facility.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet highly effective system that could deliver crisp vocal clarity for lectures, seminars, and presentations, ensuring that the sound reaches every corner of the space with absolute precision.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific academic requirements. The installation utilizes N10P enclosures for pristine primary mid-high coverage, complemented seamlessly by G7 loudspeakers to provide wide-dispersion and clear zonal fills. The entire system is powered efficiently by a robust HD1200 amplifier, ensuring reliable, continuous, and distortion-free performance during critical events.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• N10P Loudspeakers (Premium Mid-High Coverage) | 2 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 4 Units\n" +
      "• HD1200 Amplifier (System Power Handling) | 1 Units\n\n" +
      "Professionally calibrated, the setup ensures that the audio remains balanced and intelligible across the entire area. IIT Mandi now boasts a highly effective auditory environment that significantly elevates the academic and communicative experience for both students and faculty.",
  },
  {
    id: "max-hospital-gurugram",
    category: "healthcare",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT MAX HOSPITAL, GURUGRAM SEC 66",
    desc: "A sophisticated and highly articulate professional audio setup designed to deliver pristine sound across medical, administrative, and conference zones.",
    img: [max],
    details:
      "MAH Hospital, located in Sector 66, Gurugram, recently integrated a comprehensive audio system to provide a clear, reliable, and professional auditory environment. A modern premium healthcare facility requires an articulate sound setup capable of handling precise announcements, soothing background ambiance, and dynamic audio for specialized presentation areas.\n\n" +
      "The primary acoustic requirement was to deploy a highly intelligible system that could deliver crisp vocal clarity for critical communications and widespread coverage, while also featuring robust low-frequency support for specific multi-purpose or conference spaces within the hospital.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A versatile and precisely tuned audio solution was engineered to meet the unique multi-zone demands of the facility. The installation prominently features N12PR enclosures for primary mid-high coverage, perfectly complemented by a wide array of G7 loudspeakers for seamless zonal fills across corridors and waiting areas. To provide substantial low-frequency depth where required, a combination of N18WPR and N12WP subwoofers was integrated. The entire system is meticulously managed and calibrated using an advanced LMS2026 Digital Signal Processor to ensure independent multi-zone control and distortion-free output.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• N12PR Loudspeakers (Primary Mid-High Coverage) | 2 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 8 Units\n" +
      "• N18WPR Subwoofers (Heavy Low-Frequency Support) | 2 Units\n" +
      "• N12WP Subwoofer (Dedicated Low-Frequency Support) | 1 Units\n" +
      "• LMS2026 Digital Signal Processor (System Management & Tuning) | 1 Units\n\n" +
      "Professionally tuned utilizing the LMS2026 DSP, the setup ensures that the audio remains pristine, balanced, and perfectly zoned without causing fatigue. MAH Hospital now benefits from a highly effective communication and auditory environment that enhances the overall experience for patients, visitors, and medical staff.",
  },
  {
    id: "nainital-high-court",
    category: "gov",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT NAINITAL HIGH COURT AUDITORIUM & CLASSROOMS",
    desc: "A comprehensive, high-fidelity professional audio installation designed to provide exceptional vocal clarity and widespread coverage for judicial and educational proceedings.",
    img: [nannital2],
    details:
      "The Nainital High Court recently integrated a comprehensive professional audio system across its main auditorium and dedicated classrooms. The prestigious judicial facility required an articulate, highly reliable sound setup capable of handling precise announcements, presentations, and clear communication during critical proceedings.\n\n" +
      "The primary acoustic requirement was to deploy a highly intelligible multi-zone system. The auditorium required crisp vocal clarity and even coverage across large seating areas with robust low-frequency support, while the classroom environments needed precise, distraction-free audio tailored for instruction and seminars.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A versatile and precisely tuned audio solution was engineered to meet the unique multi-zone demands of the facility. For the Auditorium, the installation prominently features COX12, F8, and HW6.5 loudspeakers for pristine mid-high coverage, perfectly complemented by S218 subwoofers for low-frequency depth and F12AM active monitors for stage reference. The Classroom zone utilizes a targeted combination of TL5.5, HW6.5, and K208 column speakers to deliver focused and clear sound. The entire deployment is powered efficiently by robust TTA800 and D4200 amplifiers to ensure continuous, distortion-free performance.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n\n" +
      "[ AUDITORIUM ZONE ]\n" +
      "• COX12 Loudspeakers (Primary Mid-High Coverage) | 4 Units\n" +
      "• F8 Loudspeakers (Wide Coverage & Zonal Fills) | 8 Units\n" +
      "• HW6.5 Loudspeakers (Supplementary Fills) | 4 Units\n" +
      "• F12AM Active Stage Monitors (Speaker/Presenter Reference) | 2 Units\n" +
      "• S218 Subwoofers (Heavy Low-Frequency Support) | 2 Units\n" +
      "• TTA800 Amplifier (System Power Handling) | 1 Unit\n\n" +
      "[ CLASSROOM ZONE ]\n" +
      "• TL5.5 Loudspeakers (Primary Instructional Audio) | 6 Units\n" +
      "• HW6.5 Loudspeakers (Zonal Fills) | 6 Units\n" +
      "• K208 Column Speakers (Focused Acoustic Coverage) | 4 Units\n" +
      "• D4200 Amplifiers (Zone Power Handling) | 2 Units\n\n" +
      "The strategic placement of these premium enclosures ensures a balanced, highly intelligible soundscape tailored to the specific acoustic needs of each space. The Nainital High Court now benefits from a highly effective communication environment that significantly enhances the auditory experience for judges, speakers, and attendees alike.",
  },
  {
    id: "the-studs-sports-bar-pune",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT THE STUDS SPORTS BAR, PUNE",
    desc: "A high-energy, immersive professional audio setup designed to deliver an electrifying entertainment and sports viewing experience.",
    img: [studebar],
    details:
      "The Studs Sports Bar, located in Pune, recently upgraded its audio system to provide an immersive and highly energetic auditory environment for its patrons. As a premium sports and entertainment venue, the establishment required a powerful sound setup capable of delivering heart-pounding audio during live match screenings and dynamic music playback.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting, multi-zone system that could deliver pristine mid-high clarity for sports commentary and general music, while providing deep, thumping low-frequency punch to elevate the overall nightlife experience.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the vibrant space. The installation prominently features a robust array of S15P and S26P loudspeakers for crystal-clear, high-SPL mid-high coverage, perfectly complemented by G7 enclosures for targeted wide-dispersion zonal fills. To achieve the intense low-frequency impact required, a heavy combination of S218 subwoofers was integrated. The entire system is driven by a robust rack of heavy-duty amplifiers, including TIP 1002, TIP 1602, and D4200 units, and is meticulously managed by an LMS206 Digital Signal Processor for precise tuning and multi-zone control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• S15P Loudspeakers (Premium Mid-High Coverage) | 6 Units\n" +
      "• S26P Loudspeakers (High-SPL Mid-High Coverage) | 4 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 8 Units\n" +
      "• S218 Subwoofers (Heavy Low-Frequency Support) | 2 Units\n" +
      "• TIP 1002 Amplifiers (System Power Handling) | 2 Units\n" +
      "• TIP 1602 Amplifier (Heavy-Duty Power Handling) | 1 Units\n" +
      "• D4200 Amplifier (Zonal Power Handling) | 1 Units\n" +
      "• LMS206 Digital Signal Processor (System Management & Tuning) | 1 Units\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP, the setup ensures that the audio remains punchy, distortion-free, and perfectly balanced across all entertainment and dining zones. The Studs Sports Bar in Pune now boasts a highly electrifying auditory environment that significantly elevates the patron experience.",
  },
  {
    id: "pegasus-restaurant-nashik",
    category: "hospitality",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT PEGASUS RESTAURANT, NASHIK",
    desc: "A premium and immersive professional audio setup designed to deliver an exceptional dining and entertainment experience.",
    img: [nasik2],
    details:
      "Pegasus Restaurant, located in Nashik, recently upgraded its audio system to provide an engaging and highly inviting auditory environment for its guests. As a premium dining and entertainment venue, the establishment required a versatile sound setup capable of delivering consistent and high-quality audio across its spaces.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet powerful system that could deliver pristine mid-high clarity for ambient background music, while providing deep, rich low-frequency support to elevate the atmosphere during peak hours and events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation utilizes COX 12 loudspeakers for crystal-clear, high-fidelity mid-high coverage. To complement the mid-highs, an S218 subwoofer was seamlessly integrated to provide a substantial low-frequency foundation. The entire system is driven by robust TIP 1002 and TIP 1602 amplifiers, and is meticulously managed by a DL2.6 Digital Signal Processor for precise acoustic tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• COX 12 Loudspeakers (Premium Mid-High Coverage) | 4 Units\n" +
      "• S218 Subwoofer (Heavy Low-Frequency Support) | 1 Units\n" +
      "• TIP 1002 Amplifier (System Power Handling) | 1 Units\n" +
      "• TIP 1602 Amplifier (Heavy-Duty Power Handling) | 1 Units\n" +
      "• DL2.6 Digital Signal Processor (System Management & Tuning) | 1 Units\n\n" +
      "Professionally calibrated utilizing the DL2.6 DSP unit, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive without overpowering conversations. Pegasus Restaurant in Nashik now boasts a premium auditory experience that perfectly complements its vibrant and welcoming ambiance.",
  },
  {
    id: "aviraj-farmhouse-chhatarpur",
    category: "hospitality",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT AVIRAJ FARMHOUSE, CHHATARPUR",
    desc: "A versatile and reliable professional audio setup designed to deliver clear sound coverage for private gatherings and events.",
    img: [aviraj],
    details:
      "Aviraj Farmhouse, located in the prominent event and hospitality hub of Chhatarpur, recently integrated a customized professional audio system to provide a premium auditory environment for its guests. As an exclusive venue for private gatherings and events, the farmhouse required a reliable sound setup capable of delivering consistent and high-quality audio across its designated spaces.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined system that could deliver pristine mid-high clarity for background music, announcements, and ambient entertainment, ensuring an inviting atmosphere without being visually obtrusive.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation utilizes RED 10 loudspeakers for high-fidelity primary coverage, seamlessly complemented by TL5.5 enclosures to provide smooth and even zonal fills. The entire system is effectively driven by robust TTA 800 and D4200 amplifiers, ensuring continuous, reliable, and distortion-free performance throughout events.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• RED 10 Loudspeakers (Primary Mid-High Coverage) | 2 Units\n" +
      "• TL5.5 Loudspeakers (Wide Coverage & Zonal Fills) | 4 Units\n" +
      "• TTA 800 Amplifier (System Power Handling) | 1 Units\n" +
      "• D4200 Amplifier (Zonal Power Handling) | 1 Units\n\n" +
      "Professionally calibrated, the setup ensures that the audio remains perfectly balanced and immersive across the venue. Aviraj Farmhouse in Chhatarpur now boasts a premium auditory experience that perfectly complements its elegant and welcoming ambiance.",
  },
  {
    id: "shes-here-japanese-restaurant-gurugram",
    category: "hospitality",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT SHE'S HERE JAPANESE RESTAURANT, GURUGRAM",
    desc: "A premium and immersive professional audio setup designed to deliver an exceptional and authentic dining experience.",
    img: [she2],
    details:
      "She's Here Japanese Restaurant, located in Gurugram, recently upgraded its audio system to provide an engaging and highly inviting auditory environment for its guests. As a premium dining venue, the establishment required a versatile sound setup capable of delivering consistent and high-quality audio across its spaces.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet powerful system that could deliver pristine mid-high clarity for ambient background music, while providing rich, balanced low-frequency support to elevate the atmosphere without interrupting guest conversations.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation utilizes COX 12 loudspeakers for crystal-clear, high-fidelity primary mid-high coverage, perfectly complemented by G7 enclosures and CS ceiling speakers for seamless wide-dispersion zonal fills. To provide a substantial and rich low-frequency foundation, a combination of KS18 and S18 subwoofers was integrated into the space. The entire setup is driven by robust TTA800, 1002, and D4200 amplifiers, and is meticulously managed by a DL2.6 Digital Signal Processor for precise acoustic tuning and multi-zone control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• COX 12 Loudspeakers (Premium Mid-High Coverage) | 2 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 4 Units\n" +
      "• CS Ceiling Speakers (Targeted Zonal Fills) | 2 Unitss\n" +
      "• KS18 Subwoofer (Heavy Low-Frequency Support) | 1 Units\n" +
      "• S18 Subwoofer (Dedicated Low-Frequency Support) | 1 Units\n" +
      "• TTA800 Amplifier (System Power Handling) | 1 Units\n" +
      "• 1002 Amplifier (System Power Handling) | 1 Units\n" +
      "• D4200 Amplifier (Zonal Power Handling) | 1 Units\n" +
      "• DL2.6 Digital Signal Processor (System Management & Tuning) | 1 Units\n\n" +
      "Professionally calibrated utilizing the DL2.6 DSP unit, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive. She's Here Japanese Restaurant in Gurugram now boasts a premium auditory experience that perfectly complements its elegant ambiance and culinary excellence.",
  },
  {
    id: "gym-golds-gym-ranchi",
    category: "gym",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT GOLD'S GYM, RANCHI",
    desc: "A high-energy, premium professional audio setup designed to deliver an immersive and electrifying fitness experience.",
    img: [gold2],
    details:
      "Gold's Gym, located in Ranchi, recently upgraded its audio system to provide an intensely energizing and motivating workout environment for its members. The premium fitness club required a comprehensive sound setup capable of delivering club-level audio quality and high SPL across the expansive gym floor.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity for general workout zones, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during intense training sessions.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features S26P enclosures for primary high-fidelity coverage, along with a massive array of 20 G7 loudspeakers to ensure wide-dispersion and crystal-clear sound throughout the facility. These are perfectly complemented by CS7 ceiling units for targeted zonal fills in ancillary areas. To achieve the intense low-frequency impact required, a heavy deployment of N18WPR subwoofers was integrated to deliver deep, immersive bass. The entire system is driven by a robust rack of heavy-duty TPD3K and HD1200 amplifiers to ensure continuous peak performance without distortion.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• S26P Loudspeakers (Premium Mid-High Coverage) | 2 Units\n" +
      "• G7 Loudspeakers (Wide Coverage & Zonal Fills) | 20 Units\n" +
      "• N18WPR Subwoofers (Heavy Low-Frequency Support) | 3 Units\n" +
      "• CS7 Ceiling Speakers (Targeted Zonal Fills) | 6 Units\n" +
      "• TPD3K Amplifiers (System Power Handling) | 2 Units\n" +
      "• HD1200 Amplifier (Zonal Power Handling) | 1 Units\n\n" +
      "The strategic placement of the high-performance enclosures combined with massive subwoofer support ensures a balanced, distortion-free soundscape. The result is a premium, adrenaline-pumping auditory experience that perfectly aligns with the energetic and motivating fitness culture of Gold's Gym in Ranchi.",
  },
  {
    id: "mumbai-premium-residential-project",
    category: "residential",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT MUMBAI PREMIUM RESIDENTIAL PROJECT",
    desc: "A sophisticated and highly articulate professional audio setup designed to deliver pristine sound across luxury residential spaces.",
    img: [mumbai],
    details:
      "A premium residential project in Mumbai recently integrated a bespoke professional audio system to provide an immersive and high-fidelity auditory environment for its residents. High-end living spaces require a nuanced sound setup capable of delivering rich ambient background music and dynamic audio for private entertainment without disrupting the elegant aesthetic.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined and highly intelligible system that could deliver crisp mid-high clarity and smooth coverage across designated leisure zones, while also featuring robust low-frequency support for a complete, full-range listening experience.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A versatile and precisely tuned audio solution was engineered to meet the unique demands of this luxury residential facility. The installation prominently features Louis Martin 5.5 full-range loudspeakers for pristine primary coverage. To provide a rich and substantial low-frequency foundation, a Louis Martin S18 subwoofer was seamlessly integrated into the space. The entire setup is driven efficiently by robust Louis Martin D4300 and D200 power amplifiers, ensuring continuous, reliable, and distortion-free performance.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin 5.5 Full-Range Loudspeakers | 6 Units\n" +
      "• Louis Martin S18 Subwoofer | 1 Units\n" +
      "• Louis Martin D4300 Power Amplifiers | 2 Units\n" +
      "• Louis Martin D200 Power Amplifier | 1 Units\n\n" +
      "Professionally calibrated, the setup ensures that the audio remains perfectly balanced and immersive across all zones. This Mumbai premium residential project now boasts an exceptional auditory experience that perfectly complements its elegant and luxurious living environment."
  },
  {
    id: "mansarovar-house-rajouri-garden",
    category: "residential-commercial",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT MANSAROVAR HOUSE, RAJOURI GARDEN, DELHI",
    desc: "A streamlined and articulate professional audio setup designed to deliver pristine sound coverage and clarity.",
    img: [man2],
    details:
      "Mansarovar House, located in Rajouri Garden, Delhi, recently integrated a customized professional audio system to provide a premium auditory environment. The property required a reliable sound setup capable of delivering consistent and high-quality audio across its designated spaces.\n\n" +
      "The primary acoustic requirement was to deploy a highly intelligible system that could deliver crisp mid-high clarity and smooth coverage for ambient background music and general audio playback without disrupting the aesthetic of the space.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the specific acoustic demands of the venue. The installation utilizes Louis Martin Red 5 full-range loudspeakers for high-fidelity primary coverage, seamlessly complemented by Louis Martin HW6.5 enclosures to provide smooth and even zonal fills. The entire system is effectively driven by a robust Louis Martin D4300 power amplifier, ensuring continuous, reliable, and distortion-free performance.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin Red 5 Full-Range Loudspeakers | 2 Units\n" +
      "• Louis Martin HW6.5 Full-Range Loudspeakers | 2 Units\n" +
      "• Louis Martin D4300 Power Amplifier | 1 Unit\n\n" +
      "Professionally calibrated, the setup ensures that the audio remains perfectly balanced and immersive. Mansarovar House in Rajouri Garden now boasts an exceptional auditory experience that perfectly complements its refined environment.",
  },
  {
    id: "dps-faridabad-auditorium",
    category: "education",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT DELHI PUBLIC SCHOOL, FARIDABAD - AUDITORIUM",
    desc: "A robust and precise professional audio setup tailored to deliver exceptional clarity and coverage for educational events and assemblies.",
    img: [dps],
    details:
      "Delhi Public School, Faridabad, recently upgraded the audio system in its auditorium. The educational institution required a reliable sound setup capable of delivering consistent and premium audio quality across its large venue.\n\n" +
      "The primary acoustic requirement was to deploy a highly effective system that could deliver crisp vocal clarity for lectures, assemblies, and performances, ensuring that the sound reaches every corner of the space with absolute precision.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific requirements. The installation utilizes Louis Martin F15 and F12 full-range loudspeakers for pristine primary mid-high coverage and dynamic sound reinforcement. The entire system is powered efficiently by a robust Louis Martin TIP1602 power amplifier, ensuring reliable, continuous, and distortion-free performance during critical events. Additionally, a Louis Martin DL2.6 Digital Loudspeaker Processor is integrated for precise system management, crossover control, and acoustic tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin F15 Full-Range Speakers | 2 Nos\n" +
      "• Louis Martin F12 Full-Range Speakers | 2 Nos\n" +
      "• Louis Martin TIP1602 Power Amplifier | 1 Nos\n" +
      "• Louis Martin DL2.6 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated using the digital processor, the setup ensures that the audio remains balanced and intelligible across the entire seating area. The auditorium at Delhi Public School, Faridabad now boasts a highly effective auditory environment that significantly elevates the communicative experience for both students and faculty."
  },
  {
    id: "mocha-cafe-bar-jamshedpur",
    category: "hospitality",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT MOCHA CAFÉ & BAR, JAMSHEDPUR",
    desc: "A premium and versatile professional audio setup designed to deliver an exceptional dining and entertainment experience.",
    img: [mocha2],
    details:
      "Mocha Café & Bar, located in Jamshedpur, recently upgraded its audio system to provide an engaging and highly inviting auditory environment for its patrons. As a premium café and bar, the establishment required a versatile sound setup capable of delivering consistent, high-quality audio that transitions smoothly from daytime dining to energetic evening entertainment.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet powerful system that could deliver pristine mid-high clarity for ambient background music, while providing rich, punchy low-frequency support to elevate the atmosphere during peak hours.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation utilizes Amate Audio S26P full-range loudspeakers for crystal-clear, high-fidelity primary coverage, perfectly complemented by Amate Audio G7 pendant speakers for seamless wide-dispersion zonal fills. To provide a substantial and rich low-frequency foundation, Amate Audio N12WP subwoofers were integrated into the space. The entire setup is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning and multi-zone control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S26P Full-Range Speakers | 6 Nos\n" +
      "• Amate Audio G7 Pendant Speakers | 8 Nos\n" +
      "• Amate Audio N12WP Subwoofers | 2 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP unit, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive. Mocha Café & Bar in Jamshedpur now boasts a premium auditory experience that perfectly complements its vibrant ambiance.",
  },
  {
    id: "social-nehru-place-delhi",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT SOCIAL NEHRU PLACE, DELHI",
    desc: "A versatile and dynamic professional audio setup tailored to deliver premium sound for a bustling cafe and entertainment venue.",
    img: [],
    details:
      "Social, located in Nehru Place, Delhi, recently upgraded its audio system to provide an engaging and vibrant auditory environment for its guests. As a popular dining and collaborative workspace that transitions into a high-energy nightlife spot, the establishment required a versatile sound setup capable of delivering consistent and premium audio across its distinct zones.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet powerful system that could deliver pristine mid-high clarity for ambient background music during the day, while providing rich, dynamic sound reinforcement to elevate the atmosphere during evening events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation prominently features Amate Audio S26P and N15P full-range loudspeakers for crystal-clear, high-fidelity primary coverage. These are perfectly complemented by Amate Audio G7 full-range speakers to ensure seamless, wide-dispersion zonal fills throughout the space. The entire setup is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning, crossover management, and multi-zone control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S26P Full-Range Speakers | 5 Nos\n" +
      "• Amate Audio N15P Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio G7 Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the Amate Audio LMS206 DSP unit, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive. Social in Nehru Place, Delhi now boasts a highly effective auditory experience that perfectly complements its dynamic and vibrant ambiance."
  },
  {
    id: "kibou-model-town-delhi",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KIBOU, MODEL TOWN, DELHI",
    desc: "A massive, high-performance professional audio setup designed to deliver an electrifying and immersive entertainment experience.",
    img: [kibo],
    details:
      "Kibou, located in Model Town, Delhi, recently upgraded its audio system to provide an intensely energizing and immersive auditory environment for its guests. As a premium venue, the establishment required a comprehensive sound setup capable of delivering high-SPL audio quality across its expansive floor.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features Amate Audio N15P, N26P, and N12P7 full-range loudspeakers for crystal-clear, high-fidelity primary coverage. These are perfectly complemented by Amate Audio G7 pendant speakers to ensure wide-dispersion zonal fills. To achieve the intense low-frequency impact required, a heavy deployment of Amate Audio S218WP and S18WP subwoofers was integrated. The entire system is driven by a robust rack of heavy-duty Amate Audio amplifiers, including HD3200, HD1200, and HD400 models.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio N15P Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio N26P Full-Range Speakers | 4 Nos\n" +
      "• Amate Audio N12P7 Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio G7 Pendant Speakers | 4 Nos\n" +
      "• Amate Audio S218WP Subwoofers | 1 Nos\n" +
      "• Amate Audio S18WP Subwoofers | 2 Nos\n" +
      "• Amate Audio HD3200 Power Amplifiers | 4 Nos\n" +
      "• Amate Audio HD1200 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio HD400 Power Amplifiers | 1 Nos\n\n" +
      "Professionally calibrated, the setup ensures that the audio remains punchy, distortion-free, and balanced across all zones. Kibou in Model Town, Delhi now boasts a highly electrifying auditory environment that significantly elevates the guest experience.",
  },
  {
    id: "khalsa-parivar-mayapuri-delhi",
    category: "community",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT KHALSA PARIVAR, MAYAPURI, DELHI",
    desc: "A streamlined and articulate professional audio setup designed to deliver pristine sound coverage and clarity for community gatherings.",
    img: [khalsa2],
    details:
      "Khalsa Parivar, located in Mayapuri, Delhi, recently integrated a customized professional audio system to provide a premium auditory environment. The venue required a reliable sound setup capable of delivering consistent and high-quality audio across its designated spaces.\n\n" +
      "The primary acoustic requirement was to deploy a highly intelligible system that could deliver crisp mid-high clarity and smooth coverage for announcements, speeches, and general audio playback without disrupting the aesthetic of the space.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the specific acoustic demands of the venue. The installation utilizes Amate Audio G7 pendant speakers for high-fidelity primary coverage and seamless zonal fills. To provide a balanced and rich low-frequency foundation, Amate Audio N12WP subwoofers were integrated. The entire system is effectively driven by a robust Amate Audio HD1200 power amplifier and meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning and control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio G7 Pendant Speakers | 8 Nos\n" +
      "• Amate Audio N12WP Subwoofers | 2 Nos\n" +
      "• Amate Audio HD1200 Power Amplifier | 1 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive. Khalsa Parivar in Mayapuri, Delhi, now boasts an exceptional auditory experience that perfectly complements its community environment."
  },
  {
    id: "millionaire-the-lux-club-noida",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT MILLIONAIRE – THE LUX CLUB, NOIDA",
    desc: "A premium, high-energy professional audio setup designed to deliver an immersive and electrifying nightlife experience.",
    img: [noida],
    details:
      "Millionaire – The Lux Club, located in Noida, recently upgraded its audio system to provide an intensely energizing and immersive auditory environment for its guests. As a premium nightlife venue, the establishment required a comprehensive sound setup capable of delivering high-SPL audio quality across its vibrant dance floor and lounge areas.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during club events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features Amate Audio S15P and N26P full-range loudspeakers for crystal-clear, high-fidelity primary coverage. To achieve the intense low-frequency impact required, a heavy deployment of Amate Audio S218WP subwoofers was integrated. The entire system is driven by a robust rack of heavy-duty Amate Audio amplifiers, including HD1200, HD3200, and HD400 models, and is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S15P Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio N26P Full-Range Speakers | 5 Nos\n" +
      "• Amate Audio S218WP Subwoofers | 2 Nos\n" +
      "• Amate Audio HD1200 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio HD3200 Power Amplifier | 1 Nos\n" +
      "• Amate Audio HD400 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP, the setup ensures that the audio remains punchy, distortion-free, and perfectly balanced. Millionaire – The Lux Club in Noida now boasts a highly electrifying auditory environment that significantly elevates the ultimate clubbing experience.",
  },
  {
    id: "one8-commune-aerocity-gurugram",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT ONE8 COMMUNE, AEROCITY, GURUGRAM",
    desc: "A premium, high-energy professional audio setup designed to deliver an immersive and electrifying nightlife and dining experience.",
    img: [one82],
    details:
      "One8 Commune, located in Aerocity, Gurugram, recently upgraded its audio system to provide an intensely energizing and immersive auditory environment for its guests. As a premium hospitality and nightlife venue, the establishment required a comprehensive sound setup capable of delivering high-SPL audio quality across its vibrant dining and lounge areas.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features Amate Audio S15P and N12PR full-range loudspeakers for crystal-clear, high-fidelity primary coverage. To achieve the intense low-frequency impact required, a heavy deployment of Amate Audio S218WP subwoofers was integrated. The entire system is driven by a robust rack of heavy-duty Amate Audio amplifiers, including HD1200 and HD400 models, and is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio S15P Full-Range Speakers | 4 Nos\n" +
      "• Amate Audio N12PR Full-Range Speakers | 4 Nos\n" +
      "• Amate Audio S218WP Subwoofers | 2 Nos\n" +
      "• Amate Audio HD1200 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio HD400 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP, the setup ensures that the audio remains punchy, distortion-free, and perfectly balanced. One8 Commune in Aerocity, Gurugram now boasts a highly electrifying auditory environment that significantly elevates the ultimate dining and clubbing experience."
  },
  {
    id: "oral-sky-bar-gurugram",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT ORAL SKY BAR, GURUGRAM",
    desc: "A premium and versatile professional audio setup designed to deliver an exceptional rooftop dining and entertainment experience.",
    img: [oral2],
    details:
      "Oral Sky Bar, located in Gurugram, recently upgraded its audio system to provide an engaging and highly inviting auditory environment for its guests. As a premium dining and entertainment venue, the establishment required a versatile sound setup capable of delivering consistent, high-quality audio that transitions smoothly from relaxed dining to energetic evening entertainment.\n\n" +
      "The primary acoustic requirement was to deploy a streamlined yet powerful system that could deliver pristine mid-high clarity for ambient background music, while providing rich, punchy low-frequency support to elevate the atmosphere during peak hours.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A targeted audio solution was engineered to meet the venue's specific acoustic demands. The installation utilizes Amate Audio N12PR full-range loudspeakers for crystal-clear, high-fidelity primary coverage, perfectly complemented by Amate Audio G7 pendant speakers for seamless wide-dispersion zonal fills. To provide a substantial and rich low-frequency foundation, Amate Audio N18WP and N12WP subwoofers were integrated into the space. The entire setup is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning and multi-zone control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio N12PR Full-Range Speakers | 2 Nos\n" +
      "• Amate Audio G7 Pendant Speakers | 8 Nos\n" +
      "• Amate Audio N18WP Subwoofers | 2 Nos\n" +
      "• Amate Audio N12WP Subwoofers | 1 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP unit, the setup ensures that the audio remains perfectly balanced, distortion-free, and immersive. Oral Sky Bar in Gurugram now boasts a premium auditory experience that perfectly complements its vibrant ambiance.",
  },
  {
    id: "dragonfly-mumbai",
    category: "hospitality-entertainment",
    title: "PROFESSIONAL AUDIO DEPLOYMENT AT DRAGONFLY, MUMBAI",
    desc: "A premium, high-energy professional line array audio setup designed to deliver an immersive and electrifying nightlife experience.",
    img: [dragon],
    details:
      "Dragonfly, located in Mumbai, recently upgraded its audio system to provide an intensely energizing and immersive auditory environment for its guests. As a premium nightlife and entertainment venue, the establishment required a comprehensive, concert-grade sound setup capable of delivering high-SPL audio quality across its vibrant dance floor and lounge areas.\n\n" +
      "The primary acoustic requirement was to deploy a heavy-hitting system that could deliver pristine mid-high clarity with exceptional throw, while providing deep, chest-thumping low-frequency punch to keep energy levels peaking during major events.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "A powerful and versatile audio solution was engineered to meet the extreme acoustic demands of the space. The installation prominently features an array of Amate Audio X12CLA Line Array Speakers for crystal-clear, high-fidelity primary coverage and massive throw. These are perfectly complemented by Amate Audio S15P Full-Range Speakers for targeted zonal fills. To achieve the intense low-frequency impact required, a heavy deployment of Amate Audio N218WP Subwoofers was integrated. The entire system is driven by robust Amate Audio HD3200 Power Amplifiers, and is meticulously managed by an Amate Audio LMS206 Digital Loudspeaker Processor for precise acoustic tuning, delay, and crossover control.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio X12CLA Line Array Speakers | 6 Nos\n" +
      "• Amate Audio S15P Full-Range Speakers | 4 Nos\n" +
      "• Amate Audio N218WP Subwoofers | 4 Nos\n" +
      "• Amate Audio HD3200 Power Amplifiers | 2 Nos\n" +
      "• Amate Audio LMS206 Digital Loudspeaker Processor | 1 Nos\n\n" +
      "Professionally calibrated utilizing the LMS206 DSP, the setup ensures that the audio remains punchy, distortion-free, and perfectly balanced. Dragonfly in Mumbai now boasts a highly electrifying auditory environment that significantly elevates the ultimate clubbing experience.",
  },
  {
    id: "pune-event-2025",
    category: "event",
    title: "EXCLUSIVE AMATE AUDIO SHOWCASE IN PUNE 2025",
    desc: "An exclusive and highly anticipated product showcase bringing together leading system integrators and audio professionals to experience Amate Audio's latest innovations.",
    img: [demopune2],
    details:
      "In 2025, Eminent Audio Visual hosted an exclusive and highly anticipated product showcase in Pune. Bringing together leading system integrators, rental companies, and audio professionals, this event served as the perfect platform to demonstrate our latest innovations in professional audio and AV technology to the local industry.\n\n" +
      "At our Pune event, we proudly showcased a comprehensive product range exclusively from the premium brand, Amate Audio. Our display featured their cutting-edge solutions specifically engineered for live sound, touring, fixed installations, and demanding commercial audio environments.\n\n" +
      "THE SHOWCASE & EXPERIENCE\n\n" +
      "Visitors and industry partners had the opportunity to experience the pristine sound quality of Amate Audio equipment firsthand through live demonstrations. Our technical team was actively involved in interactive sessions, helping dealers and professionals understand the exceptional performance, reliability, and European engineering excellence behind this incredible product portfolio.\n\n" +
      "A MILESTONE FOR EMINENT AUDIO VISUAL\n\n" +
      "Showcasing this top-tier product range in Pune in 2025 has been a major milestone for Eminent Audio Visual. It strongly reinforced our commitment to empowering the Indian market with world-class audio technology. We sincerely thank everyone who joined us in Pune and look forward to building stronger partnerships in the professional audio industry."
  },
  {
    id: "as-sound-live-deployment",
    category: "event",
    title: "PREMIUM TOURING & LIVE EVENT AUDIO DEPLOYMENT FOR AS SOUND",
    desc: "A robust and high-performance touring audio setup featuring state-of-the-art line arrays and subwoofers to deliver uncompromised live sound reinforcement.",
    img: [assound], // Yahan apni image ka variable daal dena
    details:
      "AS Sound, a premier audio rental and live event production company, recently expanded its inventory with a massive audio deployment to cater to large-scale concerts, festivals, and outdoor live events. The requirement was a touring-grade system that guarantees exceptional vocal clarity, enormous power handling, and rapid rigging capabilities for quick setups.\n\n" +
      "The primary acoustic goal was to acquire a system capable of delivering high Sound Pressure Levels (SPL) with consistent coverage across vast audience areas, ensuring every beat and vocal nuance is experienced with concert-level intensity and zero distortion.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "To meet these rigorous touring and live sound demands, AS Sound chose a formidable combination of industry-leading Amate Audio equipment. The deployment features the highly efficient Amate Audio XA211 Line Array elements for wide, pristine mid-high dispersion and massive throw. These are perfectly complemented by the monstrous Amate Audio XW218 Subwoofers, engineered to provide earth-shaking, deep low-frequency extension that live concerts demand.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio XA211 Line Array Elements | 12 Nos\n" +
      "• Amate Audio XW218 High-Performance Subwoofers | 8 Nos\n\n" +
      "With this powerful new addition to their inventory, AS Sound is now fully equipped to handle high-profile live events and touring shows. The new Amate Audio system empowers them to offer their clients unparalleled audio fidelity, chest-thumping bass, and massive, even sound projection across any venue."
  },
  {
    id: "balance-box-deployment",
    category: "event",
    title: "HIGH-PERFORMANCE AUDIO DEPLOYMENT FOR BALANCE BOX",
    desc: "A comprehensive, tour-grade professional audio setup combining advanced line arrays, earth-shaking subwoofers, and high-fidelity point source speakers for unparalleled live sound.",
    img: [balancebox], // Yahan apni image ka variable laga dena
    details:
      "Balance Box recently upgraded its technical inventory with a massive professional audio deployment to meet the diverse and extreme demands of modern live events, concerts, and premium productions. The requirement was a highly versatile, robust, and touring-grade system capable of delivering flawless audio across multiple venue sizes.\n\n" +
      "The primary acoustic objective was to achieve concert-level Sound Pressure Levels (SPL) with absolute vocal clarity, seamless audience coverage, and chest-thumping low-frequency impact, ensuring an electrifying and immersive auditory experience.\n\n" +
      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +
      "To fulfill these rigorous acoustic demands, a premium arsenal of Amate Audio systems was deployed. The core of the setup features the highly advanced Amate Audio XA211 Line Array Elements, delivering pristine mid-high projection and exceptional throw. For the low-end foundation, massive Amate Audio XW218 Subwoofers were integrated to produce deep, distortion-free bass that physically moves the crowd. Finally, to ensure absolute clarity and perfect coverage in near-field or out-fill zones, the deployment was perfected with Amate Audio 102FD Full-Range Speakers.\n\n" +
      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Amate Audio XA211 Line Array Elements | 8 Nos\n" +
      "• Amate Audio XW218 High-Performance Subwoofers | 4 Nos\n" +
      "• Amate Audio 102FD Full-Range Speakers | 4 Nos\n\n" +
      "With this formidable Amate Audio integration, Balance Box has significantly elevated its production capabilities. The new setup ensures uncompromising audio fidelity, massive power, and a perfectly balanced sonic environment, ready to dominate any high-energy show or premium event."
  },
  {
    id: "ps-sound-pune-deployment",
    category: "event",
    title: "HIGH-PERFORMANCE AUDIO DEPLOYMENT FOR PS SOUND, PUNE",
    desc: "A complete Louis Martin professional audio deployment featuring Q80 line array systems, S218 dual subwoofers, TIP Series power amplifiers, and DL 2.6 DSP, engineered to deliver exceptional clarity, high SPL, and powerful bass for live events.",
    img: [pss], // Add your image variable here

    details:
      "PS Sound, Pune, has expanded its professional audio inventory with a complete Louis Martin sound reinforcement system designed to meet the demands of concerts, weddings, corporate events, festivals, and large-scale live productions. The objective was to deploy a reliable, high-output system capable of delivering consistent performance, exceptional clarity, and powerful low-frequency impact across a variety of event venues.\n\n" +

      "The system has been carefully configured to provide outstanding vocal intelligibility, uniform audience coverage, high sound pressure levels, and precise audio reproduction while maintaining excellent reliability during extended live performances.\n\n" +

      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +

      "The deployment features the Louis Martin Q80 Line Array System as the primary front-of-house solution, offering excellent mid-high definition, controlled dispersion, and long-throw performance. Low-frequency reinforcement is delivered by the Louis Martin S218 Dual 18-inch Subwoofers, providing deep, tight, and impactful bass for an immersive listening experience. The entire system is powered by Louis Martin TIP Series Professional Power Amplifiers, ensuring stable power delivery, high efficiency, and dependable operation. System optimization, loudspeaker management, crossover configuration, and signal processing are handled by the Louis Martin DL 2.6 Digital Loudspeaker Processor (DSP), ensuring precise tuning and maximum system performance.\n\n" +

      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin Q80 Line Array Speakers | 12 Nos\n" +
      "• Louis Martin S218 Dual 18-inch Subwoofers | 8 Nos\n" +
      "• Louis Martin TIP1602 Professional Power Amplifiers | 4 Nos\n" +
      "• Louis Martin TIP2402 Professional Power Amplifiers | 4 Nos\n" +
      "• Louis Martin DL 2.6 Digital Loudspeaker Processor (DSP) | 1 Noss\n\n" +

      "With this complete Louis Martin deployment, PS Sound, Pune, is now equipped with a powerful and dependable professional audio solution capable of delivering exceptional performance, superior sound quality, and consistent reliability for events of every scale."
  },

  {
    id: "btc-production-nagpur-deployment",
    category: "event",
    title: "LARGE-SCALE PROFESSIONAL AUDIO DEPLOYMENT FOR BTC PRODUCTION, NAGPUR",
    desc: "A high-output Louis Martin line array deployment featuring Q80 and Q60 systems, designed to deliver exceptional coverage, powerful performance, and outstanding audio clarity for concerts and large-scale live productions.",
    img: [btc], // Add your image variable here

    details:
      "BTC Production, Nagpur, has expanded its professional audio inventory with a large-scale Louis Martin line array system to cater to concerts, live events, corporate productions, festivals, and premium entertainment venues. The objective was to build a versatile, high-performance sound reinforcement solution capable of delivering exceptional clarity, consistent coverage, and high SPL across events of varying sizes.\n\n" +

      "Designed for demanding live applications, the deployment ensures excellent vocal intelligibility, balanced frequency response, and uniform sound distribution while maintaining the reliability required for continuous touring and event production.\n\n" +

      "THE SOLUTION & EQUIPMENT SELECTION\n\n" +

      "The system features the Louis Martin Q80 Line Array as the primary solution for long-throw coverage and high-output performance, delivering exceptional mid-high clarity and precise dispersion. Complementing the main system, the Louis Martin Q60 Line Array provides additional flexibility for side hangs, delay arrays, or medium-sized venues, ensuring seamless coverage and consistent sound quality throughout the audience area. Together, the Q80 and Q60 create a scalable professional audio solution capable of meeting the diverse requirements of modern live productions.\n\n" +

      "EQUIPMENT DESCRIPTION | QUANTITY\n" +
      "• Louis Martin Q80 Line Array Speakers | 16 Nos\n" +
      "• Louis Martin Q60 Line Array Speakers | 16 Nos\n\n" +

      "With this latest Louis Martin deployment, BTC Production, Nagpur, is equipped with a powerful and scalable professional audio solution that delivers outstanding performance, exceptional coverage, and reliable operation for events of every scale."
  },
  


];

const CaseStudyDetails = () => {
  const { id } = useParams();

  const study = caseStudies.find((item) => item.id === id);

  if (!study) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Case Study Not Found</h1>
        <Link to="/case-study" className="text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  // ✅ ERROR FIX: 'models' array ko yahan uncomment kar diya gaya hai. Iske bina page crash ho jayega.
  const highlightProductModel = (text) => {
    const models = [
      "Nitid S6LP", "S6LP", "F8", "S18", "LMS206", "S15P", "S26P",
      "S218WP", "N12P7", "G7", "RED 9", "Q60", "KS218", "TTA300",
      "F10", "S218", "COX12", "HW6.5", "TTA 800", "TTA 500", "TTA 300",
      "TIP 1602", "TIP 1002", "TIP 2024", "D4200", "D300", "DL2.6",
      "DL6.2", "HD1200", "HD3200", "HD4000", "MG10XU", "MG06X", "MG06XA"
    ];

    let formattedText = text;

    models.forEach((model) => {
      // RegEx use kiya taaki exact match ho
      const regex = new RegExp(`\\b${model}\\b`, 'g');
      if (formattedText.match(regex)) {
        formattedText = formattedText.replace(regex, `<strong class="text-gray-900 font-bold">${model}</strong>`);
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <>
      <Helmet>
        <title>{study.title} | Case Study - Eminent Audio Visual</title>
        <meta name="description" content={study.details.substring(0, 160)} />
      </Helmet>

      <div
        className="bg-gray-100 py-6 md:py-10 px-3 md:px-4 min-h-screen"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
      >
        <div className="w-full max-w-10xl mx-auto bg-white overflow-hidden shadow-lg rounded-xl">
          {/* Main Hero Image */}
          <img
            src={study.img}
            alt={study.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-58 sm:h-54 md:h-[900px] object-cover"
          />

          {/* Clean Content Area */}
          <div className="p-4 sm:p-6 md:p-10 space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug uppercase border-b pb-4">
              {study.title}
            </h1>

            {/* Dynamic string parsing */}
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
              {study.details.split("\n\n").map((paragraph, index) => {

                // Normal headings rendering
                if (
                  paragraph.includes("THE SOLUTION & EQUIPMENT SELECTION") ||
                  paragraph.includes("EQUIPMENT DESCRIPTION")
                ) {
                  return (
                    <h2 key={index} className="text-gray-800 font mt-8 mb-2 leading-relaxed text-left whitespace-pre-line border-b border-gray-200 pb-2">
                      {paragraph.replace(":", "")}
                    </h2>
                  );
                }

                // Responsive rows interface grid separating descriptions and quantity
                if (paragraph.includes("•") || paragraph.includes("|")) {
                  return (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 my-2 font-mono text-xs sm:text-sm md:text-base space-y-2">
                      {paragraph.split("\n").map((line, lIdx) => {
                        const leftSide = line.split("|")[0]?.replace("•", "").trim();
                        const rightSide = line.split("|")[1]?.trim();

                        if (!leftSide) return null;

                        return (
                          <div key={lIdx} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200/60 pb-2 sm:pb-1 last:border-0 last:pb-0 gap-0.5 sm:gap-4">
                            <span className="text-gray-600 font-medium break-words">
                              {highlightProductModel(leftSide)}
                            </span>
                            {rightSide && (
                              <span className="text-blue-600 font- shrink-0 sm:text-right">
                                {rightSide}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                // Standard description text layout
                return (
                  <p key={index} className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;