<template>
    <div class="container content">
        <div class="notification-container">
            <h1>Notifications</h1>
            <div>
                <div class="notification">
                    <h4 class="notification-title cursor">Welcome back! Continue where you left off to get ready for your
                        interview.</h4>
                    <div class="notification-actions">
                        <span class="small notification-timestamp">Posted On: May 26th 2023 at 4:49:12 pm
                            read</span>
                        <span>

                            <button type="button" class="btn btn-outline-danger"><el-icon :size="20">
                                    <Delete />
                                </el-icon>Delete</button>
                        </span>
                    </div>
                </div>
                <div class="notification">
                    <h4 class="notification-title cursor">Ready...set...start! Begin with the One Month Preparation Kit</h4>
                    <div class="notification-actions">
                        <span class="small notification-timestamp">Posted On: May 26th 2023 at 4:49:12 pm
                            read</span>
                        <span>

                            <button type="button" class="btn btn-outline-danger"><el-icon :size="20">
                                    <Delete />
                                </el-icon>Delete</button>
                        </span>
                    </div>
                </div>
                <div class="notification">
                    <h4 class="notification-title cursor">Welcome back! Continue where you left off to get ready for your
                        interview.</h4>
                    <div class="notification-actions">
                        <span class="small notification-timestamp">Posted On: May 26th 2023 at 4:49:12 pm
                            read</span>
                        <span>

                            <button type="button" class="btn btn-outline-danger"><el-icon :size="20">
                                    <Delete />
                                </el-icon>Delete</button>
                        </span>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script lang="ts">

</script>
<style>
.notification-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.notification-title,
.notification-timestamp {
    font-weight: 300;
}

.notification-timestamp {
    width: 200px;
    font-size: 14px;
    color: #666;
}

.notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.notification-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>