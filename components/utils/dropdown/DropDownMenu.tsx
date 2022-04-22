export interface IDropDownMenu {
  hidden: Boolean;
  empty?: Boolean;
  displayData: Array<{ displayName: string }>;
  width: string;
}

const DropDownMenu: React.FC<IDropDownMenu> = ({
  hidden,
  empty,
  displayData,
  width,
}) => {
  return (
    <div
      className={`${
        empty || hidden ? 'hidden' : ''
      } rounded text-highlight text-left p-2 mt-1 border-2 border-highlight h-auto ${width} bg-white absolute`}
    >
      {displayData.map(({ displayName }) => {
        return <div key={displayName}>{displayName}</div>;
      })}
    </div>
  );
};

export default DropDownMenu;
