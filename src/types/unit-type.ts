type unit_type = {
    unitNumber: string;
    unitName: string;
    character: string;
    unitGuide: string;
    sections: {
        section: string;
        type: string;
        lessons: {
            questions: {
                type: string;
                sentence: {
                    word: string;
                    meaning: string;
                }[];
                meaning: string;
                options: string[];
                id: string;
            }[];
        }[];
    }[];
}

export default unit_type