/* eslint-env node, mocha */
import { expect } from 'chai';
import factory from '../src/index';

const namer = factory();

describe('modular-css-short-namer', () => {
    it('should generate short names', () => {
        expect(namer('file', 'selector')).to.have.length(1);
    });

    it('should return the same name for the same file/selector', () => {
        expect(namer('file', 'selector')).to.equal(namer('file', 'selector'));
    });

    it('should return unique names for different file/selector', () => {
        expect(namer('file', 'selector')).to.not.equal(namer('file', 'selector2'));
        expect(namer('file', 'selector')).to.not.equal(namer('file2', 'selector'));
        expect(namer('file', 'selector')).to.not.equal(namer('file2', 'selector2'));
    });

    it('should use its own cache for each instance', () => {
        const namer1 = factory();
        const namer2 = factory();

        expect(namer1('f', 's1')).to.equal(namer2('f', 's2'));
    });
});
