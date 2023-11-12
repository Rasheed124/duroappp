const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-3">
      <h2 className="text-lg text-[#F7AB0] border-[#F7AB0] rounded-full p-2">
        Owner
      </h2>

      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default Logo;
