const projectsData = {
    outpass: {
        title: "Smart Outpass Management System",
        category: "Full Stack",
        subtitle: "Deployed & Production-Ready Campus Authorization Platform",
        overview: "A production-grade, multi-role campus management system designed to automate the process of student outpass approval and security verification. It is currently deployed and actively used by students, mentors, HODs, and gate security on campus.",
        problem: "Manual paper-based outpasses lead to administrative delays, verification loopholes, lack of real-time parent notifications, and physical storage clutter. Security guards have no secure way to verify if an outpass signature is legitimate or forged.",
        whyBuilt: "Built to streamline administrative workflows, prevent gate-pass forgery, automate parent approvals, and provide a secure digital verification mechanism for security gate keepers.",
        features: [
            "Role-Based Dashboards: Dedicated interfaces for Students, Mentors, HODs, Security Guards, and Administrators.",
            "Two-Way Verification: Parent approval request via secure OTP integration before HOD approval.",
            "QR-Based Entry/Exit: Dynamic QR code generation for approved passes, verified in real-time by security gates.",
            "Escalation Logic: Backup mentor routing and automated escalation triggers if a request is pending past a threshold.",
            "Graduation-Year Automation: Auto-update student batches and graduation years to minimize admin database setups.",
            "Role Authorization: Secure JWT authentication with strict route shielding."
        ],
        tech: ["React.js", "Node.js", "Express.js", "TypeScript", "Prisma ORM", "SQLite", "REST APIs", "Git"],
        contributions: [
            "Architected the full-stack database schema using Prisma ORM with SQLite backend database integration.",
            "Designed and implemented the backend approval workflow engine, routing backup approvals, and handling escalation logic.",
            "Integrated real-time SMS APIs and parent OTP validation mechanisms.",
            "Developed the gatekeeper mobile-first QR scan dashboard with camera verification and instant audit logging."
        ],
        challenges: "Managing workflow escalation and routing requested approvals to backup mentors dynamically when primary mentors are unavailable, ensuring zero campus flow delays.",
        learnings: "Deepened expertise in relational database schema designing, state transition modeling, JWT authentication management, and building user-centric interfaces under strict security roles.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Client -> Server -> SQLite (DB Schema with Relations & State)"
    },
    bhoomi: {
        title: "Bhoomi – Smart Farmer Assistant",
        category: "Mobile App",
        subtitle: "Agricultural Advisory and ML Guidance Application",
        overview: "An AI-powered agricultural mobile app created using React Native and Expo to assist farmers in remote areas with multilingual voice-assisted advisory features.",
        problem: "Farmers in rural regions face barriers in accessing modern agricultural advisories due to language literacy issues, complex user interfaces, and lack of crop matching algorithms.",
        whyBuilt: "Built to provide crop diagnostics, weather schedules, and advisories to farmers in their native tongue using speech integrations, bridging the gap between agronomy and technology.",
        features: [
            "Voice Assistant: Integrated speech recognition and text-to-speech for interactive audio queries.",
            "Multilingual Support: Localized UI structure translating key farming guides into local regional languages.",
            "Weather Advisory: Interactive forecasts mapping local rain predictions to ideal crop schedules.",
            "Crop Recommendation: Soil-condition inputs analysis suggesting top-yield crop variants.",
            "Accessibility Layout: Large clear fonts, simplified icons, and high contrast colors for easy operation."
        ],
        tech: ["React Native", "Expo", "JavaScript", "Voice APIs", "Speech-to-Text", "Text-to-Speech", "ML Advisory Engine"],
        contributions: [
            "Designed the React Native navigation and UI layouts focusing on high-contrast accessibility standards.",
            "Integrated the native browser Speech-to-Text and TTS modules for the conversational voice advisory assistant.",
            "Built data fetch utilities to hook into localized weather APIs and parse agricultural advisory advice."
        ],
        challenges: "Optimizing text-to-speech rendering and speech recognition accuracy in low-bandwidth, outdoor environments where local accents vary.",
        learnings: "Mastered React Native styling constraints, Expo build configurations, mobile accessibility conventions, and offline data storage paradigms.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "React Native Client -> Audio Mic -> API Engine -> Voice Advisory Response"
    },
    campus_connect: {
        title: "Campus Connect Platform",
        category: "Full Stack",
        subtitle: "Collaboration Engine for Hackathons and Technical Projects",
        overview: "A student networking and matchmaking web portal designed to help students discover hackathons, share technical projects, and assemble multi-disciplinary development teams.",
        problem: "Students frequently struggle to find peers with complementary skill sets (e.g., matching a designer with a backend developer) for hackathons and academic project groups.",
        whyBuilt: "Created to centralize tech-event registrations and automate team formation, allowing students to filter peers by skill, graduation year, and stack expertise.",
        features: [
            "Team Creation & Request Flow: Create project ideas and invite peers or request to join existing groups.",
            "Event Discovery: Curated feed of active hackathons, technical contests, and local meetups.",
            "User Matching: Filter profiles by developer stacks, experience levels, and current academic interests.",
            "Authentication: Secure user sign-up/login with credentials shielding."
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3", "Git"],
        contributions: [
            "Built backend CRUD REST APIs for team creation, membership invites, and event scheduling.",
            "Integrated MongoDB database collections to store user profiles, tags, and request status logs.",
            "Developed the search filter component allowing real-time developer search by tech stacks."
        ],
        challenges: "Managing dynamic team state updates and preventing race conditions when multiple users join the same team simultaneously.",
        learnings: "Understood Document-based database design in MongoDB, backend routing structures in Express, and state propagation across dynamic components.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "React Frontend -> Express API Router -> MongoDB Collections (Users, Teams, Events)"
    },
    lost_found: {
        title: "Lost & Found Portal",
        category: "Full Stack",
        subtitle: "Campus Lost Asset Recovery and Claim Hub",
        overview: "A full-stack, secure recovery web app allowing college students to log missing items, browse recovered assets, and directly communicate with discoverers.",
        problem: "Physical lost-and-found desks are highly inefficient, resulting in low recovery rates, manual registry overhead, and lack of immediate notifications.",
        whyBuilt: "Built to accelerate the recovery rate of lost items on campus by creating a transparent, searchable digital hub with verified claiming workflows.",
        features: [
            "Item Categorization: Browse missing items by category, location lost, date, and keyword search.",
            "Claiming Verification: Discoverers can request specific verification questions (e.g., 'What color was the cover?') to shield against false claims.",
            "Real-Time Recovery Logs: Instantly logs items discovered and marks them as recovered on successful claim.",
            "Verification Checkpoints: Secure user accounts ensuring only registered campus students can submit listings."
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "JavaScript"],
        contributions: [
            "Developed the front-end layout for reporting lost items and rendering recovery lists.",
            "Wrote claiming routing APIs and secure item verification checks.",
            "Configured file-upload routes for uploading item proof images."
        ],
        challenges: "Ensuring database security so that item proof pictures are only accessible to verified moderators and original owners.",
        learnings: "Enhanced skills in full-stack architecture coordination, image processing, database authorization scopes, and user session validation.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Client -> Express Server -> Multer Middleware -> Local/Cloud Storage & MongoDB Metadatas"
    },
    disaster_prep: {
        title: "Disaster Preparedness Web Application",
        category: "Utility",
        subtitle: "Interactive Crisis Education and Quiz Portal",
        overview: "An educational platform designed to elevate citizen awareness on disaster safety protocols through quizzes, guidebooks, and crisis simulation scenarios.",
        problem: "Traditional preparedness pamphlets are dry and rarely read, leading to low retention of critical safety protocols (e.g., earthquake drill procedures).",
        whyBuilt: "Designed to gamify safety training, making learning disaster response engaging, memorable, and accessible across mobile and desktop viewports.",
        features: [
            "Preparedness Quiz Engine: Interactive multiple-choice quizzes scoring response speeds and protocol accuracy.",
            "Emergency Guides: Comprehensive, structured guides for floods, fires, earthquakes, and cyclones.",
            "Response Feedback: Instantly shows safety ratings and correction notes after quiz runs."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Backend REST APIs", "JSON Guides"],
        contributions: [
            "Designed and styled the responsive quiz dashboard using clean CSS grid layouts.",
            "Wrote the JavaScript logic representing the dynamic quiz score updates and correction cards.",
            "Curated and parsed the emergency guide content into searchable JSON formats."
        ],
        challenges: "Making the application fully accessible to users in low-bandwidth, high-stress conditions (e.g., during power cuts or slow cell service).",
        learnings: "Optimized vanilla JavaScript performance, refined fluid grid layouts, and focused on semantic HTML accessibility structures.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Vanilla UI Client -> Event Listeners -> Interactive Score Card Renderer"
    },
    runway_mgmt: {
        title: "Airport Runway Management System",
        category: "Systems",
        subtitle: "Operating Systems Process Scheduling Simulation",
        overview: "A systems simulation dashboard demonstrating processes scheduling and resource allocation concepts applied to airport runways and incoming flights.",
        problem: "Simulating operating system CPU scheduling concepts (FCFS, SJF, Round Robin) in a text-only command line makes it difficult to visually grasp performance differences.",
        whyBuilt: "Built as an educational operating systems project to map process scheduling parameters directly to physical runways, visually showing scheduling bottlenecks.",
        features: [
            "Scheduling Algorithms: Visual simulations of First-Come-First-Serve (FCFS), Shortest Job First (SJF), Priority Scheduling, and Round Robin.",
            "Multi-Runway Routing: Allocates incoming processes (flights) across multiple available runways dynamically.",
            "Emergency Preemption: Instant scheduling priority shifts for emergency landing requests, preempting lower-priority flights."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "CPU Scheduling Logic", "Process Queues"],
        contributions: [
            "Programmed the core process queue scheduling logic implementing the FCFS, SJF, and Round Robin priority logic.",
            "Built the real-time scheduling canvas displaying flights moving down runways as execution progress bars.",
            "Implemented the preemption toggle showcasing thread interrupts during emergencies."
        ],
        challenges: "Accurately simulating Round Robin time slicing visually on the timeline without freezing the browser's main execution loop.",
        learnings: "Gained a deep practical understanding of OS scheduling states, processes preemptions, thread queues, and asynchronous event loops.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Incoming Process Queue -> Scheduler Logic -> Runway 1 / Runway 2 Timelines (FCFS/RR)"
    },
    hotel_mgmt: {
        title: "Hotel Management System",
        category: "Utility",
        subtitle: "Desktop Reservation and Operations Manager",
        overview: "A robust Java Swing desktop management application utilizing MySQL database integrations to handle room bookings, customer details, and invoice billing.",
        problem: "Small-scale hotels face management friction using spreadsheets, experiencing double-booking bugs and slow receipt calculations.",
        whyBuilt: "Created to provide a secure, local desktop tool that automates client reservations, manages room inventories, and processes payment checks.",
        features: [
            "Room Inventory Grid: Live visual status mapping available, booked, and maintenance rooms.",
            "Customer Checkout & Billing: Automatically calculates final bill amounts based on room tiers, stay durations, and service taxes.",
            "CRUD Operations: Seamless data management for guests and staff profiles."
        ],
        tech: ["Java", "Java Swing UI", "MySQL", "JDBC", "Database Normalization"],
        contributions: [
            "Designed the desktop GUI layouts using Java Swing containment structures.",
            "Wrote the SQL queries to handle relational database bookings and avoid room booking conflicts.",
            "Implemented the JDBC connection handlers with secure SQL statement parameters to prevent database injections."
        ],
        challenges: "Preventing race conditions where two operators could reserve the same hotel room for overlapping dates.",
        learnings: "Mastered Java OOP structures, JDBC database transaction controls, SQL query normalization, and desktop GUI event handling.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Java Swing Desktop View -> JDBC Connection -> MySQL (Rooms, Bookings, Customers tables)"
    },
    food_sharing: {
        title: "Waste Food Sharing Platform",
        category: "Utility",
        subtitle: "Food Donation Registry and NGO Matching Hub",
        overview: "A web platform connecting local restaurants and event planners with nearby non-governmental organizations (NGOs) to facilitate waste food donations and curb food waste.",
        problem: "Huge quantities of surplus food from commercial events are discarded due to a lack of immediate, direct communication channels with local soup kitchens.",
        whyBuilt: "Built to automate donation matches, providing real-time listing feeds to registered charity groups.",
        features: [
            "Donation Posting: Restaurants can post food listings specifying quantity, expiry time, and location.",
            "Secure Auth: Firebase Authentication shielding user roles (Donors vs. NGOs).",
            "Real-time Feed: Immediate listing updates for NGOs seeking donation logs."
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "CSS3"],
        contributions: [
            "Integrated Firebase Auth inside the React front-end dashboard to govern role scopes.",
            "Developed the donor form posting interfaces and matching calculations.",
            "Configured MongoDB database hooks to automatically archive expired listings."
        ],
        challenges: "Handling real-time time-to-live (TTL) expiration counters so expired food listings disappear automatically from search feeds.",
        learnings: "Learned Firebase integration paradigms, database indexing triggers, and building social-good tech products.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "React UI client -> Firebase Auth Checker -> Node/Express Server -> MongoDB (surplus-food collection)"
    },
    weather_app: {
        title: "Weather Application",
        category: "Utility",
        subtitle: "Live Weather Analytics and Forecast Dashboard",
        overview: "A minimal, responsive web application pulling live atmospheric data from weather APIs to display multi-day forecasts and key statistics.",
        problem: "Standard weather portals are often bloated with ads and trackers, causing slow load speeds on mobile networks.",
        whyBuilt: "Created as a fast, clean, ad-free alternative focused on core metrics (humidity, wind speed, weather conditions) with local caching.",
        features: [
            "Dynamic Search: Real-time city search pulling global weather parameters.",
            "Interactive UI: Color shifts matching the weather state (sunny, rainy, snowy).",
            "Multi-day Forecast: Displays 5-day forecast logs with high/low temperature metrics."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Weather API", "Local Caching"],
        contributions: [
            "Developed the client side layout and city-based API fetch workflows.",
            "Designed dynamic icon overlays modifying interface theme parameters based on current weather reports.",
            "Added local storage caching to save the user's last-searched city to speed up loads."
        ],
        challenges: "Handling asynchronous API failure states elegantly when a user types an invalid or unregistered city name.",
        learnings: "Polished async/await programming in JavaScript, API header formatting, and responsive CSS variables.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "User Input -> localStorage check -> API fetch (OpenWeather) -> Responsive Metrics View"
    },
    student_mgmt: {
        title: "Student Management System",
        category: "Utility",
        subtitle: "Local Desktop Academic Registry",
        overview: "A desktop database utility engineered in Java to perform complete CRUD transactions on student files, managing grades, attendance logs, and courses.",
        problem: "Offline school departments require simple, localized file managers that don't depend on cloud services or web hosting.",
        whyBuilt: "Created as a lightweight offline registry for local administration desks, ensuring simple backups and fast record accesses.",
        features: [
            "Grade Management: Calculate overall class grade averages and generate printable transcript metrics.",
            "Database Connectivity: Integrates with local databases to store data records reliably.",
            "Validation Prompts: Checks input integrity (e.g. preventing negative grades)."
        ],
        tech: ["Java", "JDBC", "SQL", "GUI Design", "Input Validation"],
        contributions: [
            "Programmed the core input validation modules checking grade and registration schemas.",
            "Designed database tables and indexes ensuring sub-second student searches.",
            "Wrote the transcript print layout handler producing standardized reports."
        ],
        challenges: "Managing SQL connection pools securely to ensure data remains locked when writing updates.",
        learnings: "Focused on desktop application lifecycles, database transaction controls, and programmatic input validation.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "Swing GUI Form -> JDBC Statement -> Local SQL Server Database"
    },
    shopping_cart: {
        title: "Shopping Cart Web Application",
        category: "Utility",
        subtitle: "Dynamic E-Commerce Product and Checkout Simulator",
        overview: "A responsive e-commerce front-end application simulating listing searches, dynamic cart updates, discount calculations, and checkout states.",
        problem: "Standard shopping cart websites experience lag when calculating totals locally on state changes, causing UI stuttering.",
        whyBuilt: "Built to demonstrate smooth state management practices in vanilla JavaScript, handling dynamic cart changes instantly.",
        features: [
            "Live Subtotaling: Automatically calculates totals, taxes, and shipping rates on item updates.",
            "Dynamic Cart Drawer: Sliding pane rendering items in cart with quantity modifiers.",
            "Search & Filter: Search products by price ranges, categories, and keyword matching."
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "State Management", "Local Storage"],
        contributions: [
            "Coded the state manager tracking item count, active item arrays, and discount calculations.",
            "Designed the responsive checkout panels using flexbox grids.",
            "Implemented cart persistence utilizing browser localStorage."
        ],
        challenges: "Synchronizing state updates between the item cards in the catalog grid and the item list inside the sliding cart drawer.",
        learnings: "Gained strong competencies in client-side state management, browser event listeners, and localStorage caching workflows.",
        github: "https://github.com/Navya075",
        demo: "",
        diagram: "HTML Catalog Grid <-> JS State Manager Array <-> Sliding Checkout Drawer & localStorage"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Simulated Page Loader
    const loader = document.getElementById("loader");
    const loaderBar = document.querySelector(".loader-bar");
    const body = document.body;
    let loadingProgress = 0;

    const loadInterval = setInterval(() => {
        loadingProgress += Math.floor(Math.random() * 15) + 5;
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            clearInterval(loadInterval);
            
            setTimeout(() => {
                loader.classList.add("loader-fade-out");
                body.classList.remove("loading-state");
                
                // Trigger hero section animations immediately after load
                triggerHeroAnimations();
            }, 300);
        }
        loaderBar.style.width = `${loadingProgress}%`;
    }, 80);

    function triggerHeroAnimations() {
        const heroReveals = document.querySelectorAll("#home .reveal-anim");
        const heroVisual = document.querySelector("#home .hero-visual-content");
        
        heroReveals.forEach((el) => {
            el.classList.add("reveal-active");
        });
        if (heroVisual) {
            heroVisual.classList.add("reveal-active");
        }
    }

    // 3. Scroll Progress Indicator & Sticky Navbar
    const scrollProgress = document.getElementById("scroll-progress");
    const navbar = document.querySelector(".navbar-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        // Calculate scroll progress percentage
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressPercentage = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        scrollProgress.style.width = `${progressPercentage}%`;

        // Hide/Show navbar on scroll direction (Recruiter friendly navbar behavior)
        if (window.scrollY > 150) {
            if (window.scrollY > lastScrollY) {
                // Scrolling down - hide navbar
                navbar.style.transform = "translateY(-100%)";
            } else {
                // Scrolling up - show navbar and add shadow
                navbar.style.transform = "translateY(0)";
                navbar.style.background = "rgba(250, 250, 250, 0.85)";
                navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.05)";
            }
        } else {
            navbar.style.transform = "translateY(0)";
            navbar.style.background = "rgba(250, 250, 250, 0.75)";
            navbar.style.boxShadow = "none";
        }
        lastScrollY = window.scrollY;

        // Show/Hide Back to Top button
        const backToTopBtn = document.getElementById("back-to-top");
        if (window.scrollY > 500) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    // 4. Back to Top Button Click
    const backToTopBtn = document.getElementById("back-to-top");
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 5. Mobile Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-item");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("nav-active");
            menuToggle.classList.toggle("nav-active");
            
            if (isOpen) {
                body.style.overflow = "hidden"; // Prevent body scrolling
            } else {
                body.style.overflow = ""; // Re-enable body scrolling
            }
        });

        // Close menu when clicking nav links
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-active");
                menuToggle.classList.remove("nav-active");
                body.style.overflow = "";
            });
        });
    }

    // 6. Project Filtering & Search Logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card-item");
    const searchInput = document.getElementById("project-search");

    let activeFilter = "all";
    let searchQuery = "";

    function filterProjects() {
        projectCards.forEach((card) => {
            const category = card.getAttribute("data-category");
            const projectId = card.getAttribute("data-project-id") || "";
            const projectInfo = projectsData[projectId] || {};
            
            const title = (projectInfo.title || "").toLowerCase();
            const desc = (card.querySelector(".project-desc")?.textContent || "").toLowerCase();
            const tech = (projectInfo.tech || []).join(" ").toLowerCase();
            const features = (projectInfo.features || []).join(" ").toLowerCase();
            
            const matchesFilter = activeFilter === "all" || category === activeFilter;
            const matchesSearch = searchQuery === "" || 
                title.includes(searchQuery) || 
                desc.includes(searchQuery) || 
                tech.includes(searchQuery) ||
                features.includes(searchQuery);

            if (matchesFilter && matchesSearch) {
                card.classList.remove("hidden-card");
                // Force repaint and trigger entry animation
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                setTimeout(() => {
                    card.classList.add("hidden-card");
                }, 300); // Match transition duration
            }
        });
    }

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Update active filter button state
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            filterProjects();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterProjects();
        });
    }

    // 7. Scroll Reveal & Intersection Observer Integrations
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    // Generic scroll reveal observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll(
        ".scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-y, #about .reveal-anim"
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // Stats counter animation observer
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statValues = entry.target.querySelectorAll(".stat-value");
                statValues.forEach((stat) => {
                    animateStatCounter(stat);
                });
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const statsContainer = document.querySelector(".about-stats");
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    function animateStatCounter(element) {
        const target = parseFloat(element.getAttribute("data-target"));
        const decimals = parseInt(element.getAttribute("data-decimals")) || 0;
        const duration = 2000; // 2 seconds animation
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function (easeOutQuad)
            const easeProgress = progress * (2 - progress);
            const currentValue = easeProgress * target;

            element.textContent = currentValue.toFixed(decimals);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toFixed(decimals);
            }
        }
        requestAnimationFrame(updateCounter);
    }

    // Skills progress badge fill observer
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const badges = entry.target.querySelectorAll(".skill-badge");
                badges.forEach((badge) => {
                    const value = badge.getAttribute("data-value");
                    badge.style.setProperty("--skill-progress", `${value}%`);
                    badge.classList.add("anim-active");
                });
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const skillCards = document.querySelectorAll(".skill-category-card");
    skillCards.forEach((card) => skillsObserver.observe(card));

    // Active Section Tracking in Navigation Link
    const navObserverOptions = {
        threshold: 0.25,
        rootMargin: "-25% 0px -25% 0px"
    };

    const sections = document.querySelectorAll("section[id]");
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute("id");
                const currentNavLink = document.querySelector(`.nav-item[href="#${sectionId}"]`);
                
                if (currentNavLink) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    currentNavLink.classList.add("active");
                }
            }
        });
    }, navObserverOptions);

    sections.forEach((section) => navObserver.observe(section));

    // 8. Contact Form Client-side Validation & Mock API
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const feedbackBox = document.getElementById("form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Reset state
            let isFormValid = true;
            const inputs = contactForm.querySelectorAll("input[required], textarea[required]");

            inputs.forEach((input) => {
                const formGroup = input.parentElement;
                
                // Email format check
                if (input.type === "email") {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) {
                        formGroup.classList.add("invalid");
                        isFormValid = false;
                    } else {
                        formGroup.classList.remove("invalid");
                    }
                } else {
                    // Standard empty check
                    if (input.value.trim() === "") {
                        formGroup.classList.add("invalid");
                        isFormValid = false;
                    } else {
                        formGroup.classList.remove("invalid");
                    }
                }

                // Add real-time correction listener
                input.addEventListener("input", () => {
                    if (input.value.trim() !== "") {
                        if (input.type === "email") {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (emailRegex.test(input.value.trim())) {
                                formGroup.classList.remove("invalid");
                            }
                        } else {
                            formGroup.classList.remove("invalid");
                        }
                    }
                });
            });

            if (isFormValid) {
                // Show loading state
                submitBtn.classList.add("btn-loading");
                const btnSpinner = submitBtn.querySelector(".spinner");
                if (btnSpinner) btnSpinner.classList.remove("hidden");

                // Mocking AJAX submission delay
                setTimeout(() => {
                    // Stop loading spinner
                    submitBtn.classList.remove("btn-loading");
                    if (btnSpinner) btnSpinner.classList.add("hidden");

                    // Show success feedback
                    feedbackBox.classList.remove("hidden");
                    
                    // Reset form fields
                    contactForm.reset();

                    // Hide success feedback after 5 seconds
                    setTimeout(() => {
                        feedbackBox.classList.add("hidden");
                    }, 5000);
                }, 1800);
            }
        });
    }

    // 9. Project Case Study Modal Manager
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body-content");
    const modalClose = document.getElementById("modal-close");

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        // Build features list
        const featuresHtml = data.features.map(f => `<li>${f}</li>`).join("");
        
        // Build contributions list
        const contributionsHtml = data.contributions.map(c => `<li>${c}</li>`).join("");
        
        // Build tech tags
        const techHtml = data.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join("");

        // Build Demo Link button if demo link is available
        const demoLinkHtml = data.demo 
            ? `<a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration: none; padding: 10px 20px; font-size: 0.9rem; border: none; display: flex; align-items: center; gap: 8px;"><i data-lucide="external-link" style="width:16px;height:16px;"></i> Live Demo</a>` 
            : "";

        modalBody.innerHTML = `
            <div class="modal-project-header">
                <span class="modal-project-cat">${data.category}</span>
                <h3 class="modal-project-title" id="modal-title">${data.title}</h3>
                <p class="modal-project-sub">${data.subtitle}</p>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="file-text"></i> Project Overview</h5>
                <p>${data.overview}</p>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="alert-circle"></i> Problem Statement</h5>
                <p>${data.problem}</p>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="help-circle"></i> Why I Built It</h5>
                <p>${data.whyBuilt}</p>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="list"></i> Key Features</h5>
                <ul class="modal-list">${featuresHtml}</ul>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="user-check"></i> My Contributions</h5>
                <ul class="modal-list">${contributionsHtml}</ul>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="cpu"></i> Technologies Used</h5>
                <div class="modal-tech-box">${techHtml}</div>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="git-branch"></i> System Architecture / Workflow</h5>
                <div class="diagram-placeholder">
                    <i data-lucide="network"></i>
                    <span>${data.diagram}</span>
                </div>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="alert-triangle"></i> Challenges Faced</h5>
                <p>${data.challenges}</p>
            </div>

            <div class="modal-section">
                <h5><i data-lucide="lightbulb"></i> Key Learnings</h5>
                <p>${data.learnings}</p>
            </div>

            <div class="modal-links-row">
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="text-decoration: none; padding: 10px 20px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;"><i data-lucide="github" style="width:16px;height:16px;"></i> View Repository</a>
                ${demoLinkHtml}
            </div>
        `;

        // Render Lucide icons loaded inside modal
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Show modal and lock page scroll
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }

    // Attach click listeners to all View Details buttons
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("open-project-modal")) {
            const projectId = e.target.getAttribute("data-project-id");
            if (projectId) {
                openModal(projectId);
            }
        }
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    // Close modal on backdrop click
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
});
