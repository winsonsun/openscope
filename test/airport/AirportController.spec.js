import ava from 'ava';
import sinon from 'sinon';

import AirportController from '../../src/assets/scripts/client/airport/AirportController';
import { AIRPORT_JSON_KLAS_MOCK } from '../airport/_mocks/airportJsonMock';
import { AIRPORT_LOAD_LIST_MOCK } from '../airport/_mocks/airportLoadListMocks';

ava('throws when called to instantiate', (t) => {
    t.throws(() => new AirportController());
});

ava('does not throw when .init() is called with initialization props', (t) => {
    t.notThrows(() => AirportController.init(AIRPORT_JSON_KLAS_MOCK, AIRPORT_LOAD_LIST_MOCK));
});
