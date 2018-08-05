import itemTags from './constants/itemTags'

const model = {
  filterTags: [],
  dataList: [
    {
      title: "Kastracja kota",
      content: "kastracja kotka blabla bla ucinanie jajek",
      tags: [itemTags.KASTRACJA, itemTags.KOT]
    },
      {
      title: "Kastracja psa",
      content: "kastracja pieska blabla bla ucinanie jajek",
      tags: [itemTags.KASTRACJA, itemTags.PIES]
    },
    {
      title: "Sterylizacja",
      content: "doktor ulcia prymulcia robi najlepsze sterylki tralalilali",
      tags: [itemTags.STERYLIZACJA, itemTags.KOT, itemTags.PIES]
    },
    {
      title: "Szczepionko",
      content: "oj ulcia prymulcia to potrafi zaszczepic",
      tags: [itemTags.WSCIEKLIZNA, itemTags.SZCZEPIENIE]
    },
    {
      title: "wyciskanko",
      content: "na wyciskanko gruczolow z dupki najlepiej najpierw umyc pieskowi dupciunie",
      tags: [itemTags.GRUCZOL, itemTags.DERMATOLOGIA]
    },
    {
      title: "wysypka",
      content: "drapu drapu jakie czerwone bebu",
      tags: [itemTags.WYSYPKA, itemTags.DERMATOLOGIA]
    }
  ]
}

export default model