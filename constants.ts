import { Language } from './types';

export const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: 'he', label: 'עברית' },
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
];

export const LEGAL_TEXTS_STRUCTURED = {
  police: {
    exemption_3_2_2: {
      key: 'police_exemption_3_2_2',
      text: {
        he: `3.2.2: עסק עד 200 מקומות ישיבה ללא מכירה, הגשה וצריכה של משקאות משכרים פטור מהדרישות המופיעות בפריט זה.`,
        en: `3.2.2: A business with up to 200 seats without the sale, serving, and consumption of alcoholic beverages is exempt from the requirements listed in this section.`,
        ru: `3.2.2: Предприятие до 200 посадочных мест без продажи, подачи и потребления алкогольных напитков освобождается от требований, перечисленных в этом разделе.`
      }
    },
    cctv_install_3_3_1: {
      key: 'police_cctv_install_3_3_1',
      text: {
        he: `3.3.1: בעסק תותקן מערכת מצלמות טלוויזיה במעגל סגור (טמ"ס) ברזולוציה של 1.3 מגה פיקסל לפחות או שווה ערך.`,
        en: `3.3.1: A closed-circuit television (CCTV) system with a resolution of at least 1.3 megapixels or equivalent shall be installed in the business.`,
        ru: `3.3.1: В предприятии должна быть установлена система видеонаблюдения (CCTV) с разрешением не менее 1.3 мегапикселей или эквивалентным.`
      }
    },
    cctv_placement_3_3_2: {
      key: 'police_cctv_placement_3_3_2',
      text: {
        he: `3.3.2: המצלמות ימוקמו במבואת הכניסה באופן שתצלם כלפי חוץ ופנים, ובקיר החיצוני באופן שיצלם את השטח שמחזית העסק עד למרחק של 10 מטר.`,
        en: `3.3.2: The cameras will be located in the entrance lobby to film both outwards and inwards, and on the exterior wall to film the area in front of the business up to a distance of 10 meters.`,
        ru: `3.3.2: Камеры будут расположены во входном холле для съемки как снаружи, так и внутри, а также на внешней стене для съемки территории перед предприятием на расстоянии до 10 метров.`
      }
    },
    cctv_recording_3_3_4: {
      key: 'police_cctv_recording_3_3_4',
      text: {
        he: `3.3.4: ההקלטה תישמר למשך 14 יום לפחות ממועד צילומה. למערכת יהיה גיבוי חשמל לחצי שעה לפחות.`,
        en: `3.3.4: The recording shall be kept for at least 14 days from the date of filming. The system must have a power backup for at least half an hour.`,
        ru: `3.3.4: Запись должна храниться не менее 14 дней с даты съемки. Система должна иметь резервное питание не менее чем на полчаса.`
      }
    }
  },
  health: {
    general_4_8: {
      key: 'health_general_4_8',
      text: {
        he: `4.8: מזון והזנה - יש לפעול לפי כל ההוראות החלות על טיפול במזון, בהתאם לתקנות רישוי עסקים (תנאי תברואה נאותים לבתי אוכל).`,
        en: `4.8: Food and Nutrition - All instructions regarding food handling must be followed, in accordance with the Business Licensing Regulations (Proper Sanitary Conditions for Food Establishments).`,
        ru: `4.8: Продукты питания и питание - Необходимо соблюдать все инструкции по обращению с пищевыми продуктами в соответствии с Положениями о лицензировании предприятий (Надлежащие санитарные условия для предприятий общественного питания).`
      }
    },
    waste_4_10_3: {
      key: 'health_waste_4_10_3',
      text: {
        he: `4.10.3: פסולת - סילוק הפסולת יהיה בהתאם לחוק התכנון והבנייה, באופן שימנע מפגעים תברואתיים וסביבתיים. פסולת מוצקה תיאסף במכלים ייעודיים.`,
        en: `4.10.3: Waste - Waste disposal shall be in accordance with the Planning and Building Law, in a manner that prevents sanitary and environmental hazards. Solid waste will be collected in designated containers.`,
        ru: `4.10.3: Отходы - Утилизация отходов должна производиться в соответствии с Законом о планировании и строительстве, таким образом, чтобы предотвратить санитарные и экологические риски. Твердые отходы будут собираться в специальных контейнерах.`
      }
    },
    hygiene_appendix_a: {
      key: 'health_hygiene_appendix_a',
      text: {
        he: `נספח א' - טיפול במזון במטבחים גדולים: על העובדים לשמור על היגיינה אישית. חובה להפריד בין מזון גולמי למזון מבושל. יש לשמור על טמפרטורות מזון נכונות (חם מעל 65°C, קר מתחת ל-5°C).`,
        en: `Appendix A - Food handling in large kitchens: Employees must maintain personal hygiene. Raw food must be separated from cooked food. Proper food temperatures must be maintained (hot above 65°C, cold below 5°C).`,
        ru: `Приложение А - Обращение с пищевыми продуктами на больших кухнях: Сотрудники должны соблюдать личную гигиену. Сырые продукты должны быть отделены от приготовленных. Необходимо поддерживать правильную температуру продуктов (горячие выше 65°C, холодные ниже 5°C).`
      }
    }
  },
  fire_declaration: {
    signage_5_4: {
      key: 'fire_decl_signage_5_4',
      text: {
        he: `5.4: שילוט - יותקנו שלטים עם הכיתוב "יציאה" מעל פתחי היציאה.`,
        en: `5.4: Signage - Signs with the text "Exit" shall be installed above the exit openings.`,
        ru: `5.4: Вывески - Над выходами должны быть установлены знаки с надписью "Выход".`
      }
    },
    equipment_5_5: {
      key: 'fire_decl_equipment_5_5',
      text: {
        he: `5.5: ציוד כיבוי - יוצב מטף כיבוי מסוג אבקה יבשה במשקל 6 ק"ג בקרבת לוח החשמל. הציוד יהיה נגיש ותקין.`,
        en: `5.5: Firefighting Equipment - A 6 kg dry powder fire extinguisher shall be placed near the electrical panel. The equipment shall be accessible and in good condition.`,
        ru: `5.5: Противопожарное оборудование - Рядом с электрическим щитом должен быть размещен порошковый огнетушитель весом 6 кг. Оборудование должно быть доступным и в исправном состоянии.`
      }
    },
    approvals_5_8: {
      key: 'fire_decl_approvals_5_8',
      text: {
        he: `5.8: אישורים - בעל העסק ישמור בעסק אישורים תקפים למערכת החשמל ולמערכת הגז (אם קיימת).`,
        en: `5.8: Approvals - The business owner shall keep valid approvals for the electrical system and the gas system (if any) on the premises.`,
        ru: `5.8: Разрешения - Владелец бизнеса должен хранить на объекте действующие разрешения для электрической и газовой систем (при наличии).`
      }
    }
  },
  fire_full: {
    separation_6_7: {
      key: 'fire_full_separation_6_7',
      text: {
        he: `6.7: הפרדות ועמידות אש - בעסק יהיו הפרדות אש ועשן מחלקי הבניין האחרים, באמצעות קירות ודלתות אש (למשל, בדירוג עמידות של 30 דקות).`,
        en: `6.7: Fire separation and resistance - The business shall have fire and smoke separations from other parts of the building, using fire-rated walls and doors (e.g., with a 30-minute resistance rating).`,
        ru: `6.7: Противопожарные перегородки и огнестойкость - Предприятие должно иметь противопожарные и дымовые перегородки от других частей здания с использованием огнестойких стен и дверей (например, с рейтингом огнестойкости 30 минут).`
      }
    },
    lighting_6_11: {
      key: 'fire_full_lighting_6_11',
      text: {
        he: `6.11: תאורת חירום - תותקן מערכת תאורת חירום לאורך דרכי המילוט, המוזנת ממקור מתח חלופי.`,
        en: `6.11: Emergency lighting - An emergency lighting system shall be installed along the escape routes, powered by an alternative power source.`,
        ru: `6.11: Аварийное освещение - Вдоль путей эвакуации должна быть установлена система аварийного освещения, питаемая от альтернативного источника питания.`
      }
    },
    sprinklers_6_14: {
      key: 'fire_full_sprinklers_6_14',
      text: {
        he: `6.14: מערכת מתזים (ספרינקלרים) - חובה להתקין מערכת מתזים בעסקים מעל 300 מ"ר או המיועדים ליותר מ-300 איש. המערכת תעמוד בתקן ישראלי 1596.`,
        en: `6.14: Sprinkler system - A sprinkler system must be installed in businesses over 300 sq.m. or intended for more than 300 people. The system must comply with Israeli Standard 1596.`,
        ru: `6.14: Спринклерная система - Спринклерная система должна быть установлена на предприятиях площадью более 300 кв.м. или предназначенных для более чем 300 человек. Система должна соответствовать израильскому стандарту 1596.`
      }
    },
    detection_6_15: {
      key: 'fire_full_detection_6_15',
      text: {
        he: `6.15: מערכת גילוי אש ועשן - חובה להתקין מערכת גילוי אש בעסקים מעל 50 מ"ר המיועדים ליותר מ-50 איש. המערכת תעמוד בתקן ישראלי 1220 חלק 3.`,
        en: `6.15: Fire and smoke detection system - A fire detection system must be installed in businesses over 50 sq.m. intended for more than 50 people. The system must comply with Israeli Standard 1220 Part 3.`,
        ru: `6.15: Система обнаружения пожара и дыма - Система обнаружения пожара должна быть установлена на предприятиях площадью более 50 кв.м., предназначенных для более чем 50 человек. Система должна соответствовать израильскому стандарту 1220, часть 3.`
      }
    },
    equipment_6_13: {
      key: 'fire_full_equipment_6_13',
      text: {
        he: `6.13: ציוד כיבוי אש - יותקנו ארונות כיבוי הכוללים זרנוקים ומטפים במשקל 6 ק"ג, בהתאם לתקנים.`,
        en: `6.13: Firefighting equipment - Fire cabinets including hoses and 6 kg extinguishers shall be installed in accordance with regulations.`,
        ru: `6.13: Противопожарное оборудование - Должны быть установлены пожарные шкафы, включающие рукава и огнетушители весом 6 кг, в соответствии с нормами.`
      }
    }
  }
};
