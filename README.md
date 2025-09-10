# Rulezet - Your AI-Powered Guide to Israeli Restaurant Licensing

![Rulezet App Screenshot](https://storage.googleapis.com/aai-web-samples/apps/rulezet-screenshot-hebrew.png)

**Rulezet** is an intelligent web application designed to help restaurant owners in Israel navigate the complexities of business licensing. By answering a few simple questions about their establishment, users receive a personalized, actionable, and easy-to-understand regulatory checklist, powered by the Google Gemini API.

This tool transforms dense legal documents into a clear and interactive to-do list, demystifying the bureaucratic process and empowering entrepreneurs to achieve compliance efficiently.

---

## ✨ Features

- **📝 Personalized Reports:** Generates a unique regulatory checklist based on business size, seating capacity, services offered, and more.
- **🌐 Multilingual Support:** The entire user interface, final report, and legal citations are available in **Hebrew, English, and Russian**.
- **✅ Interactive Checklist:** Users can check off completed action items. Completed sections animate away, providing a clear sense of progress.
- **🚦 Dynamic Priority Sorting:** Requirements are automatically sorted from high to low priority, helping users focus on the most critical tasks first.
- **⚖️ In-Context Legal Citations:** Every action item includes a hover-to-view tooltip with the full text of the relevant legal article in the user's chosen language.
- **🚀 Powered by Google Gemini:** Leverages the advanced reasoning capabilities of `gemini-2.5-flash` to analyze legal text and generate accurate, user-friendly reports.

---

## ⚙️ How It Works

Rulezet combines a modern frontend with a powerful AI backend to deliver its personalized guidance.

### Frontend
- **Framework:** Built with **React** and **TypeScript** for a robust and type-safe user interface.
- **Styling:** Styled with **Tailwind CSS** for a responsive and modern design, including full support for right-to-left (RTL) languages.
- **State Management:** Utilizes React's Context API for global language state management.

### AI Engine & Data Flow
The core logic of the application revolves around a carefully constructed interaction with the Google Gemini API.

1.  **Data Collection:** The user fills out a simple questionnaire about their restaurant.
2.  **Prompt Engineering:** The application dynamically constructs a detailed prompt for the Gemini API. This prompt includes:
    - The user's specific business details.
    - A curated set of relevant legal snippets, extracted from the Israeli business licensing regulations provided in the initial PDF. These snippets are always sent in the original **Hebrew** to ensure maximum fidelity.
    - A clear set of instructions for the AI, including the desired output language and the logic for assigning priority levels.
3.  **Structured Output:** The request specifies a strict JSON schema for the response. This forces the Gemini model to return a well-structured data object, eliminating the need for fragile text parsing.
4.  **Report Generation:** Gemini analyzes the user's data against the legal text and generates a personalized report. It identifies applicable regulations, explains exemptions, and creates clear, actionable steps, all in the user's selected language.
5.  **Interactive Display:** The frontend receives the structured JSON data and renders it as the interactive checklist, complete with priority badges, multilingual citations, and completion animations.

---

## 🚀 How to Use

Using Rulezet is designed to be simple and intuitive.

1.  **Select Your Language:** Use the dropdown in the top-left corner to choose your preferred language (Hebrew, English, or Russian).
2.  **Answer the Questions:** Fill out the form with details about your restaurant.
3.  **Generate Report:** Click the "Generate My Report" button.
4.  **Review Your Checklist:** Your personalized report will appear, sorted by priority.
5.  **Track Your Progress:** As you comply with each requirement, tick the checkbox next to the action item. When all items in a category are done, the card will swipe away.
6.  **Achieve Compliance:** Once all cards are gone, a congratulatory message will appear, marking the completion of your initial compliance checklist!

---

## 💻 Running the Project Locally

To run this project on your local machine, you'll need a Google Gemini API key.

### Prerequisites
- A modern web browser.
- A code editor (like VS Code) with a live server extension (e.g., "Live Server").
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/rulezet.git
    cd rulezet
    ```

2.  **Set Up Environment Variables:**
    This project requires your Gemini API key to be available as an environment variable. The application is configured to read this key. Please refer to your development environment's documentation for setting up environment variables. The required variable is:
    
    `API_KEY="YOUR_GEMINI_API_KEY"`

3.  **Run the Application:**
    - Open the project folder in your code editor (e.g., VS Code).
    - Right-click the `index.html` file and select "Open with Live Server" (or your equivalent).
    - The application will open in your default web browser.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **AI:** Google Gemini API (`gemini-2.5-flash`)
- **Hosting:** Deployed on a static web host.

---

## 📁 Project Structure

```
.
├── public/
│   └── vite.svg           # Favicon
├── i18n/
│   └── index.ts           # UI translation strings
├── context/
│   └── LanguageContext.tsx # Global language state management
├── components/
│   ├── Icons.tsx          # SVG icon components
│   ├── LanguageSwitcher.tsx # Language selection dropdown
│   ├── Questionnaire.tsx  # The main input form
│   └── ReportDisplay.tsx    # Renders the interactive report
├── services/
│   └── geminiService.ts   # Logic for interacting with the Gemini API
├── App.tsx                # Main application component
├── constants.ts           # Legal text snippets and other constants
├── index.html             # The main HTML entry point
├── index.tsx              # React application entry point
├── metadata.json          # Application metadata
├── types.ts               # TypeScript type definitions
└── README.md              # This file
```