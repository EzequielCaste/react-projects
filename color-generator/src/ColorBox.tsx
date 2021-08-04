import {Color} from './types';

interface Props {
  color: Color;
}

const ColorBox: React.FC<Props> = ({color}) => {
  const showMessage = (id: string) => {
    // show message
    document.getElementById(id)?.setAttribute('style', 'display: block');
    navigator.clipboard.writeText(`#${id}`);
    // wait 1 sec
    // hide message
    setTimeout(() => {
      document.getElementById(id)?.setAttribute('style', 'display: none');
    }, 2000);
  };

  return (
    <div
      onClick={() => showMessage(color.hex)}
      key={color.hex}
      style={{
        cursor: 'pointer',
        backgroundColor: `#${color.hex}`,
        color: `${color.type === 'shade' ? '#fff' : '#000'}`,
      }}
      className="color-box"
    >
      <p>#{color.hex}</p>
      <p>{color.weight}%</p>
      {
        <p id={color.hex} className="color-box-copy">
          COPIED TO CLIPBOARD
        </p>
      }
    </div>
  );
};

export default ColorBox;
