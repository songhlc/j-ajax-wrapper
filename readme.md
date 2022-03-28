# 基于ui元数据的渲染引擎
目的：在保证原有界面js逻辑基本不做改动的基础上，让页面字段支持动态可配置，同时又和mdd的api设计一样，后续可以把模版数据，直接升级到MDD，和平台公用一套ui模版，同时界面可配置。


# ui元数据节点定义
```
  ENUM Formatter {
    date,
    datetime,
    financialNumber,
  }
  interface cStyle {
    maxLength?: number;
    tips?: string;
    relate?: string; // 举例 关联精度字段，用于处理数值精度
  }
  interface UIMETA{
    cName?: string; // 源字段标题，一般可以不写，仅用于ui模版配置时展示
    title: string; // 界面实际显示的标题
    bShowIt: boolean; // 默认是否显示
    iColWidth: number; // 表单时表示字段占几列：1，2，3 一般每一行默认展示3列，表格时表示具体列的宽度 如 200
    bRequired: boolean; // 字段是否必填
    bCanModify: boolean; // 字段是否可编辑
    cCtonrolType: string; // 具体用于显示的组件，如y-input
    group?: string; // 一般表单使用，主要用于表示该字段应该放在哪个分组下
    formatter?: Function|Formatter; // 一般用于浏览态使用(自定义函数或者预置类型)，做为浏览态的展示，默认不传入 则展示字段值
    cStyle?: cStyle; // 组件额外配置
    params?: Function; // 组件配置写法，有些动态值需要基于动态的row或者viewmodel，表单和表格写法不太一样，表格需要额外传入row和vm两种参数
    vType?: string; // 数字类型校验的时候需要处理
    showIf?: Function; // 相当于ko.computed 是否显示是根据条件判断
    requireIf?: Function; // 相当于ko.computed 是否必填是根据条件判断
  }
```
例子参见demo/meta.js

rendergird和renderform需要有register方法，在vm下生成一个每个字段的viewmodel模型，
可以调用类似mdd的api，setVisible setReadOnly 等等
也可以在扩展开发的脚本中进行配置


TODO:
done 1.表格也需要支持formatter为date的转化  添加formatter和dataType双重支持
done 但是和平台的不统一，可能要改 2.字段顺序需要支持小数
done 3.连续保存会报错
4.group字段要在列中显示
done 5.cControlType不存在，默认为y-input
done 6.附件个别组件，浏览编辑都需要组件处理 useComponent:true
7.文本太长 浏览态 要有。。。
8.bCanModify默认false
9.bShowIt 默认false
10.y-select useComponent disable状态样式修复

2021-03-01
done 11.form中title 支持function
12.form中title要支持ko.computed
