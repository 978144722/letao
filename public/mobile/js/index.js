$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });
    /* �ֲ�ͼ */
    mui('.mui-slider').slider({
        interval: 1000//�Զ��ֲ����ڣ���Ϊ0���Զ����ţ�Ĭ��Ϊ0��
    });
});