import { Calculators } from '@/components/calc';

describe('Calculators', () => {
  let calculator: Calculators;

  beforeEach(() => {
    calculator = new Calculators();
  });

  describe('NELA Calculator', () => {
    it('calculates NELA risk correctly for test case 1', () => {
      const risk = {
        age: 75,
        asa: 3,
        gender: 1,
        cardiac: 1,
        respiratory: 1,
        ecg: 1,
        bp: 120,
        pulse: 80,
        hb: 1,
        wcc: 10,
        urea: 5,
        sodium: 1,
        potassium: 1,
        gcs: 1,
        severity: 1,
        number: 1,
        blood: 1,
        soiling: 1,
        cancer: 1,
        cepod: 1,
        creatinine: 100
      };

      const result = calculator.calcNELA(risk);
      expect(result).toBeDefined();
      if (result) {
        expect(result.error.state).toBe(false);
        expect(typeof result.mortality).toBe('number');
        expect(result.mortality).toBeGreaterThanOrEqual(0);
        expect(result.mortality).toBeLessThanOrEqual(100);
      }
    });

    it('handles edge cases correctly', () => {
      const risk = {
        age: 100,
        asa: 5,
        gender: 1,
        cardiac: 1,
        respiratory: 1,
        ecg: 1,
        bp: 120,
        pulse: 80,
        hb: 1,
        wcc: 10,
        urea: 5,
        sodium: 1,
        potassium: 1,
        gcs: 1,
        severity: 1,
        number: 1,
        blood: 1,
        soiling: 1,
        cancer: 1,
        cepod: 1,
        creatinine: 100
      };

      const result = calculator.calcNELA(risk);
      expect(result).toBeDefined();
      if (result) {
        expect(result.error.state).toBe(false);
        expect(typeof result.mortality).toBe('number');
        expect(result.mortality).toBeGreaterThanOrEqual(0);
        expect(result.mortality).toBeLessThanOrEqual(100);
      }
    });
  });

  describe('P-POSSUM Calculator', () => {
    it('calculates P-POSSUM risk correctly for test case 1', () => {
      const risk = {
        age: 1,
        cardiac: 2,
        respiratory: 4,
        ecg: 8,
        bp: 120,
        pulse: 80,
        hb: 1,
        wcc: 10,
        urea: 5,
        sodium: 1,
        potassium: 1,
        gcs: 1,
        severity: 1,
        number: 4,
        blood: 2,
        soiling: 2,
        cancer: 2,
        cepod: 8
      };

      const result = calculator.ppcalc(risk);
      expect(result).toBeDefined();
      if (result) {
        expect(result).toHaveProperty('morbidity');
        expect(result).toHaveProperty('mortality');
        expect(result.morbidity).toBeGreaterThanOrEqual(0);
        expect(result.morbidity).toBeLessThanOrEqual(100);
        expect(result.mortality).toBeGreaterThanOrEqual(0);
        expect(result.mortality).toBeLessThanOrEqual(100);
      }
    });

    it('handles edge cases correctly', () => {
      const risk = {
        age: 4,
        cardiac: 8,
        respiratory: 8,
        ecg: 8,
        bp: 120,
        pulse: 80,
        hb: 1,
        wcc: 10,
        urea: 5,
        sodium: 1,
        potassium: 1,
        gcs: 8,
        severity: 8,
        number: 8,
        blood: 8,
        soiling: 8,
        cancer: 8,
        cepod: 8
      };

      const result = calculator.ppcalc(risk);
      expect(result).toBeDefined();
      if (result) {
        expect(result).toHaveProperty('morbidity');
        expect(result).toHaveProperty('mortality');
        expect(result.morbidity).toBeGreaterThanOrEqual(0);
        expect(result.morbidity).toBeLessThanOrEqual(100);
        expect(result.mortality).toBeGreaterThanOrEqual(0);
        expect(result.mortality).toBeLessThanOrEqual(100);
      }
    });
  });
}); 