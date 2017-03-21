import $ from 'jquery';
import angular from 'angular';
import _ from 'lodash';
/* Componentes */

import notify from 'devextreme/ui/notify';
import dialog from 'devextreme/ui/dialog';
import dxButton from 'devextreme/ui/button';
import dxForm from 'devextreme/ui/form';
import dxSelectBox from 'devextreme/ui/select_box';
import dxColorBox from 'devextreme/ui/color_box';
import dxAutoComplete from 'devextreme/ui/autocomplete';
import dxCalendar from 'devextreme/ui/calendar';
import dxDateBox from 'devextreme/ui/date_box';
import dxLookup from 'devextreme/ui/lookup';
import dxFileUploader from 'devextreme/ui/file_uploader';
import dxCheckBox from 'devextreme/ui/check_box';
import dxNumberBox from 'devextreme/ui/number_box';
import dxTagBox from 'devextreme/ui/tag_box';
import dxTextArea from 'devextreme/ui/text_area';
import dxRadioGroup from 'devextreme/ui/radio_group';
import dxRangeSlider from 'devextreme/ui/range_slider';
import dxSwitch from 'devextreme/ui/switch';
import dxPopover from 'devextreme/ui/popover';
import dxPopup from 'devextreme/ui/popup';
import dxProgressBar from 'devextreme/ui/progress_bar';
import dxLoadPanel from 'devextreme/ui/load_panel';
import dxDataGrid from 'devextreme/ui/data_grid';
import dxToast from 'devextreme/ui/toast';
import dxToolBar from 'devextreme/ui/toolbar';
import util from 'devextreme/data/utils';

/* Componentes */

import integration from 'devextreme/integration/angular';

import { FORM } from './form';

console.log(FORM);

async function buscar(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let dados = await response.json();
  return _.map(dados,(d)=>{
      return {
          id: _.get(d,'id'),
          name: _.get(d,'name'),
          email: _.get(d,'email'),
          username: _.get(d,'username'),
          phone: _.get(d,'phone'),
          address: _.get(d,'address.city'),
          company: _.get(d,'company.name'),
          website: _.get(d,'website')
      };
  });
}

$("#componente").dxButton({
  text:"Botão",
  onClick: async function(){
    notify("LOL", "error", 3000);
    console.log(await buscar());
  }
});

async function criarTabela(){
    let dados = await buscar();
    $("#tabela").dxDataGrid({
        dataSource:dados
    });
}
criarTabela();

$("#form").dxForm(FORM);
