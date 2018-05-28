export class Competition extends BaseEntity {
    name: string;
    startDateUtc: string; //DateTime
    endDateUtc: string; //DateTime
    startTime: string; //TimeSpan
    endTime: string; //TimeSpan
    subscriptionPrice: number;
    typeOfCompetition: string;
    isTwoLeggedTie: boolean;
    pointsWhenWin: number;
    pointsWhenLoss: number;
    pointsWhenDraw: number;
    pointsWhenBye: number;
    pointsWhenForfeit: number;
    fixtures: any; //List<Fixture>
    results: any; //List<ResultRow>

    constructor() {
        super();
        this.fixtures = [];
        this.results = [];

        //fixtures = new Array<Fixtures>();
        //fixtures: Fixtures[];
    }
}
