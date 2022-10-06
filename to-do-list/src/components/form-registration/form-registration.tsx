import { Form } from './style-registration';
import { Label } from '../label-form/label';
import { Input } from '../input/input';
import { inputsData } from '../../utils/data-components/input-registration/input-registration';
import { BtnSbumit } from '../btn/btn-submit';
import { BtnOnClick } from '../btn/btn-onClick';

export function FormCreateUser({ changePage }: any) {
  return (
    <>
      <Form>
        {inputsData.map((item, index) => {
          return (
            <>
              <Label text={item.label} htmlFor={item.idP} key={item.idP} />
              <Input
                idP={item.idP}
                nameP={item.nameP}
                placeholderP={item.placeholderP}
                requiredP={item.requiredP}
                typeP={item.typeP}
                key={index}
              />
            </>
          );
        })}
        <div className="section-btn">
          <BtnSbumit
            type={'submit'}
            backgroundP={'rgb(85, 255, 85)'}
            text={'Registrar'}
          />
          <BtnOnClick
            onClick={changePage}
            type={'button'}
            backgroundP={'rgb(246, 107, 14)'}
            text={'Login'}
          />
        </div>
      </Form>
    </>
  );
}
