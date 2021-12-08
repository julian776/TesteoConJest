import { createEvent } from "./functions";
beforeAll(() => {
    global.Date.now = jest.fn(() => new Date("2020-12-07T10:20:30Z").getTime());
});

test("Validation a event title and content basic", () => {
    //TODO: hacer las verificaciones
    const weekday = "mon";
    const week = 1;
    const openHour = 8;
    const closeHour = 14;

    const result = createEvent(weekday, week, openHour, closeHour);

    expect(result.title).toBe("[SOFKA U] Meeting Room");
    expect(result.description).toBe("Mentoring and Practice");
    expect(result.duration).toEqual([6, "hour"]);
});

test("Validation start date", () => {
    //TODO: hacer las verificaciones
    const weekday = "sat";
    const week = 5;
    const openHour = 8;
    const closeHour = 10;

    const result = createEvent(weekday, week, openHour, closeHour);
    const date = result.start.toISOString().split("T");
    expect(date[0]).toEqual("2022-01-08");
});

test("Validation date", () => {
    //TODO: hacer las verificaciones
    const weekday = "sat";
    const week = 5;
    const openHour = 8;
    const closeHour = 10;

    const result = createEvent(weekday, week, openHour, closeHour);

    expect(result.date).toEqual("sábado, 8 de enero de 2022");
});

test("Validation illegal arguments", () => {
    //TODO: hacer las verificaciones
    const weekday = "sat";
    const week = 5;
    const openHour = 8;
    const closeHour = 10;

    expect(() => {
        createEvent("hello", week, openHour, closeHour);
    }).toThrowError(
        new Error(
            "Argumento ilegal el dia de la semana, valores posibles; 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' y 'sun'."
        )
    );
    expect(() => {
        createEvent(weekday, -4, openHour, closeHour);
    }).toThrowError(
        new Error("Argumento ilegal para la semana, debe ser un valor positivo.")
    );
    expect(() => {
        createEvent(weekday, week, 8, 6);
    }).toThrowError(new Error("Argumento ilegal en el horario de entrada."));
});

test("create an event list of at least 10 events", () => {
    //TODO: hacer las verificaciones "Esta como largo"
    let events = [
        {
            weekday: "mon",
            week: 2,
            openHour: 1,
            closeHour: 3,
        },
        {
            weekday: "sun",
            week: 5,
            openHour: 8,
            closeHour: 10,
        },
        {
            weekday: "wed",
            week: 5,
            openHour: 5,
            closeHour: 9,
        },
        {
            weekday: "thu",
            week: 5,
            openHour: 14,
            closeHour: 20,
        },
        {
            weekday: "sat",
            week: 5,
            openHour: 9,
            closeHour: 10,
        },
        {
            weekday: "fri",
            week: 5,
            openHour: 13,
            closeHour: 15,
        },
        {
            weekday: "fri",
            week: 5,
            openHour: 10,
            closeHour: 11,
        },
        {
            weekday: "thu",
            week: 5,
            openHour: 8,
            closeHour: 10,
        },
        {
            weekday: "sat",
            week: 5,
            openHour: 8,
            closeHour: 10,
        },
        {
            weekday: "sat",
            week: 5,
            openHour: 8,
            closeHour: 10,
        },
    ];

    let eventosCreados = []
    events.map((event) => {
        eventosCreados.push(createEvent(event.weekday, event.week, event.openHour, event.closeHour))
    })

    expect(eventosCreados.length).toBe(10)
});
