import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus.flowables import HRFlowable

def generate_pdf(filename):
    # Set page margins tight to fit 1 page
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#000000'),
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#333333'),
        spaceAfter=2
    )
    
    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#000000'),
        spaceBefore=8,
        spaceAfter=2
    )
    
    body_normal_style = ParagraphStyle(
        'BodyNormal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#111111')
    )
    
    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        leftIndent=15,
        firstLineIndent=-10,
        textColor=colors.HexColor('#222222'),
        spaceAfter=1.5
    )

    story = []
    
    # 1. Header
    story.append(Paragraph("Sama Navya Reddy", title_style))
    story.append(Paragraph("Email: navyareddy0754@gmail.com | GitHub: github.com/Navya075", contact_style))
    story.append(Paragraph("Phone: +91-9392310980 | LinkedIn: linkedin.com/in/navya-reddy-6a05a0361", contact_style))
    story.append(Spacer(1, 4))
    
    # Divider helper
    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#555555'), spaceBefore=2, spaceAfter=4))
        
    # 2. Education
    add_section_header("EDUCATION")
    
    edu_data = [
        [
            Paragraph("<b>&bull;Bachelor of Technology (B.Tech) in Computer Science and Engineering</b>", body_normal_style),
            Paragraph("2024-2028", ParagraphStyle('Right1', parent=body_normal_style, alignment=2))
        ],
        [
            Paragraph("<i>Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology</i>", ParagraphStyle('Italic1', parent=body_normal_style, fontName='Helvetica-Oblique')),
            Paragraph("CGPA: 8.98", ParagraphStyle('Right2', parent=body_normal_style, alignment=2))
        ],
        [
            Paragraph("<b>&bull;Intermediate</b>", body_normal_style),
            Paragraph("2022-2024", ParagraphStyle('Right3', parent=body_normal_style, alignment=2))
        ],
        [
            Paragraph("<i>Srichaitanya Junior College</i>", ParagraphStyle('Italic2', parent=body_normal_style, fontName='Helvetica-Oblique')),
            Paragraph("Percentage: 97.2", ParagraphStyle('Right4', parent=body_normal_style, alignment=2))
        ],
        [
            Paragraph("<b>&bull;School</b>", body_normal_style),
            Paragraph("2022", ParagraphStyle('Right5', parent=body_normal_style, alignment=2))
        ],
        [
            Paragraph("<i>DAV Public School</i>", ParagraphStyle('Italic3', parent=body_normal_style, fontName='Helvetica-Oblique')),
            Paragraph("Percentage: 93.8", ParagraphStyle('Right6', parent=body_normal_style, alignment=2))
        ]
    ]
    
    t_edu = Table(edu_data, colWidths=[380, 140])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 4))
    
    # 3. Technical Skills
    add_section_header("TECHNICAL SKILLS AND INTERESTS")
    skills = [
        ("Programming Languages", "Java, C++, C, JavaScript, SQL"),
        ("Web Technologies", "HTML, CSS, React, Node.js, REST APIs"),
        ("DBMS", "MySQL (Relational Database), MongoDB"),
        ("Tools and Platforms", "Git, GitHub, VS Code, Vercel, Jupyter Notebook, Google Colab"),
        ("Computer Science Fundamentals", "Data Structures Algorithms, Object-Oriented Programming (OOP), Software Engineering, SDLC, Problem Solving, Agile Development"),
        ("Soft Skills", "Leadership, Collaboration, Communication, Adaptability, Teamwork")
    ]
    for label, items in skills:
        story.append(Paragraph(f"<b>{label}:</b> {items}", ParagraphStyle('SkillItem', parent=body_normal_style, spaceAfter=2.5)))
        
    story.append(Spacer(1, 4))
    
    # 4. Projects
    add_section_header("PROJECTS")
    
    # Outpass Project
    proj_header_1 = [
        [
            Paragraph("<b>Outpass Management System</b> | React.js, Node.js, Express.js, TypeScript, Prisma <font color='#c53087'>[ Link ]</font>", body_normal_style),
            Paragraph("", body_normal_style)
        ]
    ]
    t_proj1 = Table(proj_header_1, colWidths=[520, 0])
    t_proj1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_proj1)
    story.append(Paragraph("&bull; Developed a full-stack Outpass Management System with role-based authentication, REST APIs, and automated approval workflows for multiple user roles.", bullet_style))
    story.append(Paragraph("&bull; Implemented QR-based verification, parent SMS notifications, and secure database operations to streamline request management and campus security.", bullet_style))
    story.append(Paragraph("&bull; Built scalable backend services using Prisma and Git following software engineering best practices.", bullet_style))
    story.append(Spacer(1, 3))
    
    # Disaster Project
    proj_header_2 = [
        [
            Paragraph("<b>Disaster Preparedness Web Application</b> | HTML, CSS, JavaScript, Node.js <font color='#c53087'>[ Link ]</font>", body_normal_style),
            Paragraph("", body_normal_style)
        ]
    ]
    t_proj2 = Table(proj_header_2, colWidths=[520, 0])
    t_proj2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_proj2)
    story.append(Paragraph("&bull; Developed a full-stack web application delivering interactive disaster preparedness modules through a responsive user interface.", bullet_style))
    story.append(Paragraph("&bull; Built RESTful APIs and backend services to manage quizzes, learning content, and user interactions efficiently.", bullet_style))
    story.append(Paragraph("&bull; Utilized Git, modular development, and problem-solving to build a scalable and maintainable application.", bullet_style))
    story.append(Spacer(1, 3))
    
    # Campus Connect
    proj_header_3 = [
        [
            Paragraph("<b>Campus Connect Platform</b> | Node.js, MongoDB, JavaScript, HTML, CSS <font color='#c53087'>[ Link ]</font>", body_normal_style),
            Paragraph("", body_normal_style)
        ]
    ]
    t_proj3 = Table(proj_header_3, colWidths=[520, 0])
    t_proj3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_proj3)
    story.append(Paragraph("&bull; Developed a web platform enabling students to connect, create teams, and collaborate on projects and hackathons.", bullet_style))
    story.append(Paragraph("&bull; Designed backend services and database operations using Node.js, MongoDB, and REST APIs for efficient user and team management.", bullet_style))
    story.append(Paragraph("&bull; Applied database design, Git-based version control, and software engineering principles to deliver a reliable and maintainable solution.", bullet_style))
    
    story.append(Spacer(1, 4))
    
    # 5. Positions of Responsibility
    add_section_header("POSITIONS OF RESPONSIBILITY")
    story.append(Paragraph("&bull; Volunteer of the <b>Computer Society of India</b> (CSI VNRVJIET) 2026-Present.", bullet_style))
    story.append(Paragraph("&bull; Member of the <b>Indian Society of Technical Education</b> (ISTE VNRVJIET) 2025-Present", bullet_style))
    story.append(Paragraph("&bull; Speaker, CSI VNRVJIET Orientation 2026", bullet_style))
    story.append(Paragraph("&bull; <b>Designing and Event Management Member</b> at CSI VNRVJIET", bullet_style))
    
    story.append(Spacer(1, 4))
    
    # 6. Achievements
    add_section_header("ACHIEVEMENTS")
    story.append(Paragraph("&bull; Shortlisted in Smart India Hackathon (Internal Round) among 300+ teams for developing an innovative technology solution.", bullet_style))
    story.append(Paragraph("&bull; Finalist &ndash; Toastmasters Speech Competition, demonstrating strong communication and public speaking skills. <font color='#c53087'>[Link]</font>", bullet_style))
    story.append(Paragraph("&bull; Finalist &ndash; Webathon Hackathon, showcasing web development and problem-solving abilities.", bullet_style))
    
    story.append(Spacer(1, 4))
    
    # 7. Experience
    add_section_header("EXPERIENCE")
    exp_header = [
        [
            Paragraph("<b>Software Engineering Intern</b> | <b>VJ Startups</b>", body_normal_style),
            Paragraph("", body_normal_style)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[520, 0])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_exp)
    story.append(Paragraph("&bull; Developed full-stack web applications using React.js, Node.js, and TypeScript.", bullet_style))
    story.append(Paragraph("&bull; Implemented REST APIs, backend services, and database operations.", bullet_style))
    story.append(Paragraph("&bull; Collaborated using Git to deliver scalable software solutions.", bullet_style))
    
    doc.build(story)
    print("PDF generated successfully!")

if __name__ == "__main__":
    generate_pdf("assets/Sama_Navya_Reddy_Resume.pdf")
