class CategoryController{
    constructor(API, ToastService , $log){
        'ngInject';

        //
        this.API = API;
        this.ToastService = ToastService;
        this.$log = $log;
    }

    $onInit(){


    }

    save() {
        this.API.all('/category/add').post(this.data).then((response) => {
            if(response.data.status === 200) {
                this.ToastService.success(response.data.message)
                this.data = {}
            }
        });
    }
}

export const CategoryComponent = {
    templateUrl: './views/app/components/category/category.component.html',
    controller: CategoryController,
    controllerAs: 'vm',
    bindings: {}
};
