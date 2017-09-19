using TypeLite;

namespace ReactReduxWebPackBuild.Models
{
    [TsClass]
    public class User
    {
        #region Konstruktor
        public User()
        {
        }
        #endregion

        #region Member
        public string Name { get; set; }
        public int Age { get; set; }
        #endregion
    }
}
