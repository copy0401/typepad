/**
 * 文章类别
 * @type {{character: string, english: string, word: string, getTypeNameWith(*): (string), article: string}}
 */

define(function () {
   return {
      character : 'character',
      article   : 'article',
      english   : 'english',
      word      : 'word',
      customize : 'customize',
      getTypeNameWith(type){
         switch (type) {
            case this.article    : return '文章';
            case this.english    : return '英文';
            case this.character  : return '單字';
            case this.word       : return '單詞';
            case this.customize  : return '自定義';
            default:break;
         }
      }
   }
})