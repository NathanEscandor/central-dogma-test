'use strict';
const codon = require('central-dogma');
const should = require('chai').should();

describe('Nucleotide Functions Test', () => {
  const nucleotideString = 'ATGAATGCTACACATGCGAACTGA';

  it('should generate dna complement', () => {
    const dnaComplement = 'TACTTACGATGTGTACGCTTGACT';
    const complement = codon.dnaStrToComplement(nucleotideString);

    complement.should.equal(dnaComplement);
  });

  it('should return initial string when converting complement to complement', () => {
    const dnaComplement = 'TACTTACGATGTGTACGCTTGACT';
    const complement = codon.dnaStrToComplement(nucleotideString);
    const initialSequence = codon.dnaStrToComplement(complement);

    initialSequence.should.equal(nucleotideString);
  });

});
