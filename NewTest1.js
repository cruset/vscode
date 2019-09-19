//Taylor Cruse
//Insurance Involvement DDE in Crisis Events
//COMPLETE

import { Selector } from 'testcafe';

fixture `testarcher`
    .page `http://soldev-vm15.archerlab.local/rsaarcher/default.aspx`

    .beforeEach(async t => {
         await t
            .maximizeWindow()
            .typeText(Selector('#txtUserName'), 'sysadmin')
            .pressKey('tab')
            .typeText(Selector('#txtInstance'), 'Taylor')
            .pressKey('tab')
            .typeText(Selector('#txtpassword'), 'Archer123!')
            .click(Selector('#btnLogin'));

        await t

            .click(Selector('span').withText('Business Resiliency').find('.x-btn-arrow-glyph'))
            .click(Selector('span').withText('Log a Crisis Event'))
            .switchToIframe(Selector('iframe[id^=record][id$=iframeEl]'))
            .click(Selector('.rtsIn').nth(3).find('span').withText('Crisis Monitoring'))
    });

//Clicking Yes for Insurance Involvment
test('test1', async t => {
    const yes = Selector('#master_DefaultContent_rts_ts2622_s2626_f13547c_0')
    
    await t
        .click(yes);
        await t
            .expect(Selector('span').withText('Policy Number:').getAttribute('class')).notEql('hidden')
            .expect(Selector('span').withText('Agent Name:').getAttribute('class')).notEql('hidden')
            .expect(Selector('span').withText('Claim ID:').getAttribute('class')).notEql('hidden');  
});

        //await console.log(polnumber);
        //await polnumber.getAttribute('class');
        //await console.log(polnumber.hasAttribute('class'));
        //await console.log(polnumber.getAttribute('class'));
        //await t

        //.expect(polnumber.filterVisible()).ok()
        

//Clicking No for Insurance Involvment
test('test2', async t => {
    const no = Selector('#master_DefaultContent_rts_ts2622_s2626_f13547c_1') 
    await t
     .click(no);
    
     await t
        .expect(Selector('#master_DefaultContent_rts_ts2622_s2626_f13547c_1').withAttribute('class', /hvl-radiobutton/).exists).ok();
        
});

//Clicking Unknown for Insurance Involvment
test('test3', async t => {
    const unknown = Selector('#master_DefaultContent_rts_ts2622_s2626_f13547c_2')
    await t 
        .click(unknown);
    await t 
        .expect(Selector('#master_DefaultContent_rts_ts2622_s2626_f13547c_2').withAttribute('class', /hvl-radiobutton/).exists).ok();

});

