describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://100.115.63.251:5500/'); // This is different because of WSL
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider Updates When Box Changes', () => {
	cy.get('#volume-number').clear().type('75');
	cy.get('#volume-slider').then(($el) => {
		expect($el).to.have.value(75);
	});
  });

  it('Box Updates When Slider Changes', () => {
	cy.get('#volume-slider').invoke('val', 33).trigger('input');
	cy.get('#volume-number').then(($el) => {
		expect($el).to.have.value(33);
	});
  });

  it('Audio Updates When Slider Changes', () => {
	cy.get('#volume-slider').invoke('val', 33).trigger('input');
	cy.get('#horn-sound').then(($el) => {
		expect($el).to.have.prop('volume', 0.33);
	});
  });

  it('Image Source Changes When Party Horn Selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/images/party-horn.svg');
	});
  });

  it('Sound Source Changes When Party Horn Selected', () => {
    cy.get('#radio-party-horn').check();
	cy.get('#horn-sound').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/audio/party-horn.mp3');
	});
  });


  it('Volume Image Changes When Volume Set to 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/icons/volume-level-0.svg');
	});
  });

  it('Volume Image Changes When Volume Set to 22', () => {
    cy.get('#volume-number').clear().type('22');
    cy.get('#volume-image').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/icons/volume-level-1.svg');
	});
  });

  it('Volume Image Changes When Volume Set to 44', () => {
    cy.get('#volume-number').clear().type('44');
    cy.get('#volume-image').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/icons/volume-level-2.svg');
	});
  });

  it('Volume Image Changes When Volume Set to 88', () => {
    cy.get('#volume-number').clear().type('88');
    cy.get('#volume-image').then(($el) => {
		expect($el).to.have.prop('src', 'http://100.115.63.251:5500/assets/media/icons/volume-level-3.svg');
	});
  });

  it('Honk Button Disabled When Textbox Empty', () => {
  	cy.get('#volume-number').clear();
  	cy.get('#honk-btn').then(($el) => {
		expect($el).to.have.prop('disabled', true);
	});
  });

  it('Honk Button Disabled When Textbox NaN', () => {
  	cy.get('#volume-number').clear().type('Hello, world!');
  	cy.get('#honk-btn').then(($el) => {
		expect($el).to.have.prop('disabled', true);
	});
  });

  it('Error Shown When Textbox Outside Range', () => {
  	cy.get('#volume-number').clear().type('42000');
  	cy.get('#honk-btn').click();
  	cy.get('#volume-number').then(($el) => $el[0].checkValidity()).should('be.false');
  });

});
