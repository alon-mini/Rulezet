import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  he: {
    // App Header
    title: 'Rulezet',
    subtitle: 'המדריך החכם שלכם לרישוי מסעדות בישראל.',
    
    // Questionnaire
    q_title: 'ספרו לנו על העסק שלכם',
    q_subtitle: 'המידע יעזור לנו להכין עבורכם דוח מותאם אישית.',
    q_size: 'שטח העסק (מ"ר)',
    q_size_desc: 'השטח הכולל של המסעדה במטרים רבועים.',
    q_seating: 'כמות מקומות ישיבה',
    q_seating_desc: 'מספר הלקוחות המרבי שיכולים לשבת בו-זמנית.',
    q_offerings: 'ההיצע שלכם',
    q_serves_alcohol: 'מגישים אלכוהול',
    q_serves_alcohol_desc: 'האם אתם מוכרים משקאות אלכוהוליים?',
    q_kosher: 'כשר',
    q_kosher_desc: 'האם לעסק יש תעודת כשרות?',
    q_food_type: 'סוג אוכל עיקרי',
    q_delivery: 'שירות משלוחים',
    q_generate_button: 'הפיקו את הדוח שלי',
    
    // Loading State
    loading_title: 'מפיקים את הדוח המותאם אישית שלכם...',
    loading_subtitle: 'מנתחים את התקנות ומתאימים את ההמלצות.',
    loading_notice: 'זה עשוי לקחת רגע.',
    
    // Error State
    error_title: 'ההפקה נכשלה',
    error_message: 'אירעה שגיאה בעת הפקת הדוח. אנא בדקו את מפתח ה-API שלכם ונסו שוב.',
    error_button: 'נסו שוב',
    
    // Report Display
    report_title: 'דוח הרישוי המותאם אישית שלכם',
    report_subtitle: 'אלו תחומי הרגולציה המרכזיים שעליכם להתמקד בהם, בהתבסס על פרטי העסק שלכם.',
    report_action_items: 'פעולות נדרשות:',
    report_start_over: 'התחילו מחדש',
    
    // Misc
    priority: 'עדיפות',
    priority_high: 'גבוהה',
    priority_medium: 'בינונית',
    priority_low: 'נמוכה',
    citation_label: 'מקור החקיקה:',
    footer: 'Rulezet. מפשטים בירוקרטיה עם בינה מלאכותית.',
    congrats_title: 'כל הכבוד!',
    congrats_subtitle: 'השלמתם את כל הפעולות הנדרשות מהדוח הראשוני. אתם בדרך הנכונה לעמידה בתקנות!',

    // Radio/Checkbox options
    'dairy': 'חלבי',
    'meat': 'בשרי',
    'both': 'גם וגם',
    'none': 'ללא',
    'private': 'פרטי',
    'partnered': 'שירות חיצוני'
  },
  en: {
    // App Header
    title: 'Rulezet',
    subtitle: 'Your AI-powered guide to Israeli restaurant licensing.',
    
    // Questionnaire
    q_title: 'Tell us about your business',
    q_subtitle: 'This information will help us create your personalized report.',
    q_size: 'Business Size (m²)',
    q_size_desc: 'Total area of your establishment in square meters.',
    q_seating: 'Seating Capacity',
    q_seating_desc: 'Maximum number of customers that can be seated at once.',
    q_offerings: 'Your Offerings',
    q_serves_alcohol: 'Serves Alcohol',
    q_serves_alcohol_desc: 'Do you sell alcoholic beverages?',
    q_kosher: 'Kosher Certified',
    q_kosher_desc: 'Does your business have a Kashrut certificate?',
    q_food_type: 'Primary Food Type',
    q_delivery: 'Delivery Service',
    q_generate_button: 'Generate My Report',
    
    // Loading State
    loading_title: 'Generating Your Personalized Report...',
    loading_subtitle: 'Analyzing regulations and tailoring recommendations.',
    loading_notice: 'This may take a moment.',
    
    // Error State
    error_title: 'Generation Failed',
    error_message: 'An error occurred while generating the report. Please check your API key and try again.',
    error_button: 'Try Again',
    
    // Report Display
    report_title: 'Your Personalized Licensing Report',
    report_subtitle: 'Here are the key regulatory areas you need to focus on based on your business details.',
    report_action_items: 'Action Items:',
    report_start_over: 'Start Over',
    
    // Misc
    priority: 'Priority',
    priority_high: 'High',
    priority_medium: 'Medium',
    priority_low: 'Low',
    citation_label: 'Source Legislation:',
    footer: 'Rulezet. Simplifying bureaucracy with AI.',
    congrats_title: 'Congratulations!',
    congrats_subtitle: 'You have completed all the required actions from the initial report. You are well on your way to being compliant!',

    // Radio/Checkbox options
    'dairy': 'Dairy',
    'meat': 'Meat',
    'both': 'Both',
    'none': 'None',
    'private': 'Private',
    'partnered': 'Partnered'
  },
  ru: {
    // App Header
    title: 'Rulezet',
    subtitle: 'Ваш ИИ-гид по лицензированию ресторанов в Израиле.',
    
    // Questionnaire
    q_title: 'Расскажите о вашем бизнесе',
    q_subtitle: 'Эта информация поможет нам создать для вас персональный отчет.',
    q_size: 'Площадь бизнеса (м²)',
    q_size_desc: 'Общая площадь вашего заведения в квадратных метрах.',
    q_seating: 'Количество посадочных мест',
    q_seating_desc: 'Максимальное количество клиентов, которые могут сидеть одновременно.',
    q_offerings: 'Ваши предложения',
    q_serves_alcohol: 'Подача алкоголя',
    q_serves_alcohol_desc: 'Продаете ли вы алкогольные напитки?',
    q_kosher: 'Сертификат Кашрута',
    q_kosher_desc: 'Есть ли у вашего бизнеса сертификат кашрута?',
    q_food_type: 'Основной тип кухни',
    q_delivery: 'Служба доставки',
    q_generate_button: 'Создать мой отчет',
    
    // Loading State
    loading_title: 'Создание вашего персонального отчета...',
    loading_subtitle: 'Анализ нормативных актов и подготовка рекомендаций.',
    loading_notice: 'Это может занять некоторое время.',
    
    // Error State
    error_title: 'Ошибка создания',
    error_message: 'Произошла ошибка при создании отчета. Пожалуйста, проверьте ваш API-ключ и попробуйте снова.',
    error_button: 'Попробовать снова',
    
    // Report Display
    report_title: 'Ваш персональный отчет по лицензированию',
    report_subtitle: 'Вот ключевые нормативные области, на которые вам нужно обратить внимание, исходя из данных вашего бизнеса.',
    report_action_items: 'План действий:',
    report_start_over: 'Начать сначала',
    
    // Misc
    priority: 'Приоритет',
    priority_high: 'Высокий',
    priority_medium: 'Средний',
    priority_low: 'Низкий',
    citation_label: 'Источник законодательства:',
    footer: 'Rulezet. Упрощаем бюрократию с помощью ИИ.',
    congrats_title: 'Поздравляем!',
    congrats_subtitle: 'Вы выполнили все необходимые действия из первоначального отчета. Вы на верном пути к соблюдению требований!',

    // Radio/Checkbox options
    'dairy': 'Молочное',
    'meat': 'Мясное',
    'both': 'И то, и другое',
    'none': 'Нет',
    'private': 'Собственная',
    'partnered': 'Сторонняя'
  }
};