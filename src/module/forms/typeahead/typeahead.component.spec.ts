/**
 * Created by pratik on 1/12/17.
 */
import { AmexioTypeAheadComponent } from './typeahead.component';
import { AmexioFormIconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { IconLoaderService, CommonDataService } from '../../../index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('TypeAhead', () => {

  let comp: AmexioTypeAheadComponent;
  let fixture: ComponentFixture<AmexioTypeAheadComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AmexioTypeAheadComponent, AmexioFormIconComponent],
      providers: [IconLoaderService, CommonDataService, HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(AmexioTypeAheadComponent);
    comp = fixture.componentInstance;

    it('true is true', () => expect(true).toBe(true));
  });


  // it('initialize innervalue', () => {
  //   comp.value='sagfaf'; 
  //        expect(comp['innerValue']).toEqual(comp.value);
  //     }); 


  // it('get innervalue', () => {
  //   comp.value='sagfaf';

  // //this.fixture.detectChanges();
  //        expect(comp.value()).toEqual(comp['innerValue']);
  //     }); 

  //wrking 1- set errormsg
  it('set errormsg', () => {
    comp.errormsg = 'data incorect';
    expect(comp.helpInfoMsg).toEqual('data incorect<br/>');
  });

  it('get errormsg', () => {
    comp.errormsg = 'data incorect';
    expect(comp.errormsg).toEqual(comp._errormsg);
  });
  it('check for isValid', () => {
    comp.isValid = true;
    expect(comp.isValid).toEqual(true);
  });
  // it('onBlur()', () => {
  //   comp.onblur;
    
  // });
  

  //working 2 get minerrormsg
  // it('get minerrormsg', () => {
  //  // comp.minerrormsg="";
  //   comp.minerrormsg = 'trial';
  //   expect(comp.minerrormsg).toEqual(comp._minerrormsg);
  // })

  //get pattern
  // it('get pattern', () => {
  //   expect(comp.pattern).toEqual(comp._pattern);
  // })

  //set pattern
  // it('set pattern', () => {

  //   let obj = new RegExp(comp.pattern);
  //   expect(comp.value).not.toEqual(null);
  //   expect(comp.regEx).toEqual(obj);
  //  })

  it('register on change', () => {
    let fn: any;
    comp.registerOnChange(fn);
    expect(comp['onChangeCallback']).toEqual(fn);
  });


  it('register on touched', () => {
    let fn: any;
    comp.registerOnTouched(fn);
    expect(comp['onTouchedCallback']).toEqual(fn);
  });


  //on focus()
  // it('on focus()', () => {
  //   //comp.showToolTip=true;
  //   let flag=true;
  //   comp.onFocus();
  //   expect(comp.showToolTip).toEqual(flag);
  // })

  //on blur()
  // it('on blur()', () => {
  //   // comp.showToolTip=true;
  //   // let flag=true;
  //   comp.onBlur(fixture);
  //   //comp.onTouchedCallback();
  //   expect(comp.showToolTip).toEqual(false);
  //   expect(comp.focus).

  // })

  // it('writevalue', () => {
  //   comp.writeValue(fixture);

  //   expect(comp.value).not.toEqual(comp['innerValue']);

  // })

  // it('getCssClass()', () => {
  //   comp.getCssClass();
  //   expect(comp.getCssClass).toBeUndefined;
  //   });




  //working 3 get maxerrormsg
  // it('get _maxerrormsg', () => {
  //   comp.maxerrormsg = 'trial';
  //   expect(comp.maxerrormsg).toEqual(comp._maxerrormsg);
  // })


  it('get helpinfomsg', () => {
    comp.helpInfoMsg = "test";
    expect(comp.helpInfoMsg).toEqual(comp.helpInfoMsg);
  });

  // it('set validation flag', () => {
  //   //comp.helpInfoMsg="test";
  //   let flag: boolean;
  //   comp.setValidationFlag(flag);
  //   expect(comp.isValid).toEqual(flag);
  // })



  //set maxerrormsg


  //set minerrormsg
  // it('set minerrormsg', () => {
  //   let testvalue = comp._minerrormsg;
  //   comp.minerrormsg = testvalue;
  //   comp.helpInfoMsg="testMin value: <br/>";
  //   let str = comp.helpInfoMsg + 'Min value: ' + comp.value+ '<br/>';
  //   expect(comp.helpInfoMsg).toBe(str);
  // });


});