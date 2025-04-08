interface Education {
    institute: string;
    location: string;
    degree: string;
    time: {
        start: number;
        end: number;
    };
}

export const education: Education[] = [
    {
        institute: 'Ecole Supérieure De Génie Informatique De Paris',
        location: 'Paris',
        degree: 'Master 2 Architecture logicielle/ Ingénieur',
        time: {
            start: 2023,
            end: 2025
        }
    },
    {
        institute: 'Université de Rouen Normandie',
        location: 'Rouen',
        degree: 'Licence Informatique (Mention bien - 15)',
        time: {
            start: 2020,
            end: 2023
        }
    }
];

export default education;