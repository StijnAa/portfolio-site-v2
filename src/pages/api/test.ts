const test = async (req: any, res: any) => {
  setTimeout(() => {
    res.status(200).json({ textOutput: req.body });
  }, 1000);
};

export default test;
