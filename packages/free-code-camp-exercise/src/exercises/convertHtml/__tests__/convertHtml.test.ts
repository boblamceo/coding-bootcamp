import convertHtml from '../convertHtml';

describe('convertHtml', () => {
    it('works for &', () => {
        expect(convertHtml('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
    });
    it('works for less than operator', () => {
        expect(convertHtml('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
    });
    it('works for more than operator', () => {
        expect(convertHtml('Sixty > twelve')).toBe('Sixty &gt; twelve');
    });
    it('works for quotes', () => {
        expect(convertHtml('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
    });
    it('works for apostrophes', () => {
        expect(convertHtml("Schindler's List")).toBe('Schindler&apos;s List');
    });
    it('works for two different operators', () => {
        expect(convertHtml('<>')).toBe('&lt;&gt;');
    });
    it('works for no operaters', () => {
        expect(convertHtml('abc')).toBe('abc');
    });
});
