import styles from './AppHeader.module.css';

export interface IAppHeader {
  auth: boolean;
}

const AppHeader: React.FC<IAppHeader> = ({ auth }) => {
  return (
    <div className={`h-20 bg-gray grid grid-cols-3 text-slate text-center`}>
      <div className='flex justify-self-start ml-10'>
        <div className='my-auto'>ICON&nbsp;</div>
        <input placeholder='Search' className='text-indigo my-auto text-left border-2 border-white pl-2 w-32 focus:w-48 focus:border-red transition-all' />
      </div>
      <div className='flex mx-auto'>
        <div className='my-auto'>Space Picker</div>
        <div className='my-auto'>&nbsp;V</div>
      </div>
      <div className='justify-self-end mr-10 rounded-full h-10 w-10 bg-indigo my-auto hover:bg-slate'></div>
    </div>
  )
};

export default AppHeader;
